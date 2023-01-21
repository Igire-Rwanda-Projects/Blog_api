import mongoose from "mongoose";
const NewApllicationSchema = new mongoose.Schema({
  firstName: String,
  secondName: String,
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "please enter a valid email",
    ],
  },
  telephone: {
    type: String,
    required: true,
    unique: true,
  },
  educationLevel: String,
  programName: {
    type: String,
    enum: ["frontend_developer", "fullStack_developer"],
  },
  programTime: {
    type: String,
    enum: ["day", "evening", "weekend"],
    default: "day",
  },
  comment: String,
});

const applications = mongoose.model("Application", NewApllicationSchema);

export default applications;
