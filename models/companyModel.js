const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    role: { type: String, required: true },
    salary: { type: Number, required: true },
    rating: { type: Number, required: true },
    companyDescription: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const companyModel = new mongoose.model("companys", companySchema);
module.exports = companyModel;
