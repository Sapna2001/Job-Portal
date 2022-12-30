const express = require("express");
const router = express.Router();
const Referral = require("../models/referralModel");

router.get("/getallreferrals", async (req, res) => {
  try {
    const referral = await Referral.find();
    res.send(referral);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.post("/postreferrals", async (req, res) => {
  try {
    const newreferral = new Referral(req.body);
    await newreferral.save();
    res.send("Employee Registered Successfully");
  } catch (error) {
    console.log(error.message)
    return res.status(400).json({ error });
  }
});

router.post("/editreferral", async (req, res) => {
  try {
    await Referral.findOneAndUpdate({ _id: req.body._id }, req.body);
    res.send("Employee's Info Updated Successfully");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
