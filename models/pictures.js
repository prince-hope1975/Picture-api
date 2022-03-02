import mongoose from "mongoose";

const picSchema  = new mongoose.Schema(
{    name: String, updated: Boolean, src: String
})
export default mongoose.model("Image", picSchema)