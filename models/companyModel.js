const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    role: { type: String },
    salary: { type: Number },
    rating: { type: Number },
    companyReview: { type: String, required: true },
    postedBy: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const companyModel = new mongoose.model("company", companySchema);
module.exports = companyModel;
