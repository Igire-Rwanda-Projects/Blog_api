import mongoose from "mongoose";
const NewApllicationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
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
  calendar: {
    date: String,
    time: String,
  },
  gender: {
    type: String,
    enum: ["female", "male"],
  },
  educationLevel: String,
  programName: {
    type: String,
    enum: ["frontend_developer", "fullStack_developer"],
  },
  programTime: {
    type: String,
    enum: ["day", "evening"],
    default: "day",
  },
  comment: String,
  status: {
    type: String,
    enum: ["pending", "accepted", "denied","scheduled"],
    default: "pending",
  },
});

const applications = mongoose.model("ApplicationCohort8", NewApllicationSchema);

export default applications;
