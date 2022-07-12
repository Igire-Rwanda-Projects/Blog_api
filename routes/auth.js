const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
//  Register
router.post("/register", async (req, res) => {
  try {
    // Hashing a password
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    // hashing a password end
    const newUser = new User(
      {
        username: req.body.username,
        email: req.body.email,
        password: hashedPass,

      });
    const user = await newUser.save();
    res.status(200).json({
      message: "success",
      data: user
    });

  } catch (err) {
    return res.status(500).json(err)

  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({$or:[{ username: req.body.username },{email:req.body.username}]});
    console.log(user);
    if (!user)
      return res.status(400).json({ message: "You are not Registered , Please First register" });

    const validated = await bcrypt.compare(req.body.password, user.password);
    console.log(validated);
    if (!validated)
      return res.status(400).json({ message: "Wrong password credentials!" });

    const { password, ...others } = user._doc;
    return res.status(200).json({
      message: "success login",
      data: others
    });
  } catch (err) {
    return res.status(500).json(err);
  }
});



module.exports = router;
