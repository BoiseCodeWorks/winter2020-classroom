import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";


class ClassroomsService {
  async find(query = {}) {
    return await dbContext.Classrooms.find(query)
  }
  async findById(id) {
    let classroom = await dbContext.Classrooms.findById(id)
    if (!classroom) {
      throw new BadRequest("invalid id")
    }
    return classroom
  }
  async create(classroom) {
    return await dbContext.Classrooms.create(classroom)
  }
  async edit(update) {
    let updated = await dbContext.Classrooms.findOneAndUpdate({ _id: update.id }, update, { new: true })
    if (!updated) {
      throw new BadRequest("invalid id")
    }
    return updated
  }
  async delete(id) {
    let deleted = await dbContext.Classrooms.findOneAndDelete({ _id: id })
    if (!deleted) {
      throw new BadRequest("invalid id")
    }
  }

}

export const classroomsService = new ClassroomsService();