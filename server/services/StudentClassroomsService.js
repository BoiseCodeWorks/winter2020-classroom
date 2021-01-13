import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";


class StudentClassroomsService {
  async getClassroomByStudent(query) {
    let results = await dbContext.StudentClassrooms.find(query).populate('classroom')
    // return results

    return results.map(r => {
      let result = {
        studentClassroomId: r.id,
        ...r.classroom.toJSON()
      }
      return result
    })
  }
  // Student
  async getStudentByClassroom(classroomId) {
    let results = await dbContext.StudentClassrooms.find({ classroom: classroomId }).populate('student')
    return results

    // return results.map(r => {
    //   return {
    //     studentClassroomId: r.id,
    //     ...r.student._doc
    //   }
    // })
  }

  // Classroom



  async create(assignment) {
    return await dbContext.StudentClassrooms.create(assignment)
  }
  async delete(id) {
    let deleted = await dbContext.StudentClassrooms.findOneAndDelete({ _id: id })
    if (!deleted) {
      throw new BadRequest("invalid id")
    }
  }

}

export const studentClassroomsService = new StudentClassroomsService();