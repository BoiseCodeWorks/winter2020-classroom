import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

const Submission = new Schema(
  {
    link: { type: String, required: true },
    grade: { type: String },
    graded: { type: Boolean, default: false },
    student: { type: ObjectId, ref: "Student", required: true },
    assignment: { type: ObjectId, ref: "Assignment", required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Submission;
