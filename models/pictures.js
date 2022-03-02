import mongoose from "mongoose";

const picSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    maxlength: [30, "Name cannot be more than 30 characters"],
    required: [true, "Must Provide image name"],
  },
  updated: {type:Boolean,default: false},
  src: { type: String, required: [true, "Must provide image"] },
});
export default mongoose.model("Image", picSchema);
