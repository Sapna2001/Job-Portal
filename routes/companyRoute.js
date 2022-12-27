const express = require("express");
const router = express.Router();
const Company = require("../models/companyModel");

router.get("/getallcompanyreview", async (req, res) => {
  try {
    const companyReviews = await Company.find();
    res.send(companyReviews);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.post("/postcompanyreview", async (req, res) => {
  try {
    const newcompanyreview = new Company(req.body);
    await newcompanyreview.save();
    res.send("Company Review Posted Successfully");
  } catch (error) {
    console.log(error.message)
    return res.status(400).json({ error });
  }
});

module.exports = router;
