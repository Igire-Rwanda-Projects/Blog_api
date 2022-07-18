const router = require("express").Router();
const Application = require("../models/ApplicationForm");
import sendFunc from "../utils/mail";

router.post("/apply", async (req, res) => {
  try {
    // console.log(req.body);
    const isApplicantExist = await Application.findOne({
      email: req.body.email.trim(),
    });
    if (isApplicantExist) {
      return res.status(400).json({
        message: `Hey! ${isApplicantExist?.firstName} your application has been arleady received succesfully, Kindly work on Challenge`,
      });
    } 
    
    const savedApplication = await Application.create(req.body);

    return res.status(200).json({
      message: `your application has been receive.We shall communicate the next step via email`,

      data: sendFunc(req.body),
    });
  } catch (err) {
    return res.status(500).json(err);
  }
});
router.get("/all", async (req, res) => {
  try {
    const apps = await Application.find();
    return res.status(200).json({
      message: "success retreived all application",
      results: apps.length,
      data: apps,
    });
  } catch (err) {
    return res.status(500).json(err);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const user = await Application.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: "Applicant successfully deleted",

      data: user,
    });
  } catch (err) {
    return res.status(500).json(err);
  }
});
module.exports = router;
