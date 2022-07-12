const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//CREATE POST
router.post("/", async (req, res) => {
  // const newPost = new Post(req.body);
    // console.log(req.body);
  try {
    // console.log(req.body);
    const checkPost = await Post.findOne({title:req.body.title});
    if(checkPost){
      return res.status(404).json({error:"please change title"})
    }
    const savedPost = await Post.create(req.body)
    console.log(savedPost);
    return res.status(200).json({ message: "post created success", data: savedPost });
  } catch (err) {
    console.log(err)
    return res.status(500).json(err);
  }
});

//DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    console.log(post.user._id.toString());
    if (post.user._id.toString() === req.body.username) {
      try {
        await Post.findByIdAndDelete(req.params.id)
        return res.status(200).json({ message: "Post has been deleted..." });
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
      return res.status(401).json({ message: "You can delete only your own post!" });
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

// UPDATE DATE

//UPDATE POST
router.patch("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    console.log(post.user._id.toString())
    if (post.user._id.toString()  === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        return res.status(200).json({ message: "post updated success", data: updatedPost });
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
      return res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});



//GET POST
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.status(200).json({ message: "retrieved post success", data: post });
  } catch (err) {
    return res.status(500).json(err);
  }
});

//GET ALL POSTS
router.get("/", async (req, res) => {
  const user = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (user) {
      posts = await Post.find({ user }).sort({ _id: -1 });
    } else if (catName) {
      posts = await Post.find({category:catName}).sort({ _id: -1 });
    } else {
      posts = await Post.find().sort({ _id: -1 });
    }

   return res.status(200).json({message:"success",data:posts});
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;