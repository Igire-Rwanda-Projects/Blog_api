const router = require("express").Router();
const Application = require("../models/ApplicationForm");

router.post("/apply", async (req, res) => {
  try {
    // console.log(req.body);
    const isApplicantExist = await Application.findOne({
      email: req.body.email.trim(),
    });
    if (isApplicantExist) {
      return res.status(202).json({
        message: `Hey! ${isApplicantExist?.fistName}your application has been arleady received succesfully,  Now schedule for interview`,
      });
    } else {
      const savedApplication = await Application.create(req.body);
      return res.status(200).json({
        message: `Thank you! ${isApplicantExist?.fistName}, your application has been received successfuly, Kindly make schedule for interview`,

        data: savedApplication,
      });
    }
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
module.exports = router;
