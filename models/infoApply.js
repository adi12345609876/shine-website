import mongoose, { Schema } from "mongoose";

const infoApplySchema = new Schema(
  {
    email: String,
    name: String,
    pnumber: Number,
  },
  { timestamps: true }
);

const infoApplyModel =
  mongoose.models.infoApplyModel ||
  mongoose.model("infoApplyModel", infoApplySchema);
export default infoApplyModel;
