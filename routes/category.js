const router = require("express").Router();
const Category = require("../models/Category");

router.post("/create", async (req, res) => {
  const newCat = new Category(req.body);
  try {
    const savedCat = await newCat.save();
    return res.status(200).json({ message: "success category created", data: savedCat });
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/all", async (req, res) => {
  try {
    const cats = await Category.find();
    return res.status(200).json({ message: "success retreived all categories", data: cats });
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;