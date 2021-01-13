import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

const Assignment = new Schema(
  {
    title: { type: String, required: true },
    requirements: [{ type: String }],
    classroom: { type: ObjectId, ref: "Classroom", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Assignment;
