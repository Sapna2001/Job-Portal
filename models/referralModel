const mongoose = require("mongoose");

const referralSchema = new mongoose.Schema(
  {
    employeefirst: { type: String, required: true },
    employeelast: { type: String },
    mobile: { type: Number },
    email: { type: String },
    company: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const referralModel = new mongoose.model("referral", referralSchema);
module.exports = referralModel;
