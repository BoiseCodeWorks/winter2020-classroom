import mongoose from "mongoose";
import AssignmentSchema from "../models/Assignment";
import ClassroomSchema from "../models/Classroom";
import StudentSchema from "../models/Student";
import StudentClassroomSchema from "../models/StudentClassroom";
import SubmissionSchema from "../models/Submission";

class DbContext {
  Classrooms = mongoose.model("Classroom", ClassroomSchema);
  Assignments = mongoose.model("Assignment", AssignmentSchema);
  Students = mongoose.model("Student", StudentSchema);
  Submissions = mongoose.model("Submission", SubmissionSchema);
  StudentClassrooms = mongoose.model("StudentClassroom", StudentClassroomSchema);
}

export const dbContext = new DbContext();
