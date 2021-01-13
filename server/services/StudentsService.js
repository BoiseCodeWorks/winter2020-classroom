import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";


class StudentsService {
  async find(query = {}) {
    // when referenceing the dbContext objects they are Mongoose methods
    return await dbContext.Students.find(query)
  }
  async findById(id) {
    let student = await dbContext.Students.findById(id)
    if (!student) {
      throw new BadRequest("invalid id")
    }
    return student
  }
  async create(student) {
    return await dbContext.Students.create(student)
  }
  async edit(update, user) {
    let updated = await dbContext.Students.findOneAndUpdate({ _id: update.id }, update, { new: true })
    if (!updated) {
      throw new BadRequest("invalid id")
    }
    return updated
  }
  async delete(id) {
    let deleted = await dbContext.Students.findOneAndDelete({ _id: id })
    if (!deleted) {
      throw new BadRequest("invalid id")
    }
  }

}

export const studentsService = new StudentsService();