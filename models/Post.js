const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: false,
        default: "https://images.pexels.com/photos/3861967/pexels-photo-3861967.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"

    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref:"User"
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref:"Category"
    },
    visible:{
        type:Boolean,
        default:true
    }
},
    { timestamps: true }
);


PostSchema.pre(/^find/, function (next) {
    this.populate({
      path: "user",
      select: "_id username email role profilePic",
    });
    this.populate({
        path:"category"
    });
    next();
  });
module.exports = mongoose.model("Post", PostSchema);
