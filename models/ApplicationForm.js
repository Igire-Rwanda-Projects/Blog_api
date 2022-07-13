const mongoose = require("mongoose");

const applicationFormShema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    gender: {
      type: String,
    },
    age: {
      type: String,
    },
    education: {
      type: String,
    },
    experience: {
      type: Boolean,
    },
    hours: {
      type: String,
    },
    github: {
      type: Boolean,
    },
    githubLink: {
      type: String,
    },
    competency: {
      type: String,
    },
    occupation: {
      type: String,
    },
    schoolName: {
      type: String,
    },
    hoursFrom: {
      type: String,
    },
    hoursTo: {
      type: String,
    },
    laptop: {
      type: Boolean,
    },
    obtainLaptop: {
      type: String,
    },
    commitment: {
      type: Boolean,
    },
    wishJoin: {
      type: String,
    },
    hears: {
      type: String,
    },
    scholarship: {
      type: String,
    },
    dream: {
      type: String,
    },
    ubudehe: {
      type: String,
    },
    sector: {
      type: String,
    },
    district: {
      type: String,
    },
    province: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ApplicationCohort7", applicationFormShema);
// export default applicationType;

// module.exports = mongoose.model("ApplicationType", applicationFormShema);
// export default applicationType;
