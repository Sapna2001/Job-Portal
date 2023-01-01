const mongoose = require("mongoose");

const referralSchema = new mongoose.Schema(
  {
    employeefirst: { type: String, required: true },
    employeelast: { type: String },
    mobile: { type: String },
    email: { type: String, required: true },
    company: { type: String, required: true },
    description: { type: String, required: true },
    role: { type: String, required: true },
    applyLink: { type: String, required: true },
    postedBy: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const referralModel = new mongoose.model("referral", referralSchema);
module.exports = referralModel;
