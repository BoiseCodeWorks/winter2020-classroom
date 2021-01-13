import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";


class AssignmentsService {
  async find(query = {}) {
    return await dbContext.Assignments.find(query)
  }
  async findById(id) {
    let assignment = await dbContext.Assignments.findById(id)
    if (!assignment) {
      throw new BadRequest("invalid id")
    }
    return assignment
  }
  async create(assignment) {
    return await dbContext.Assignments.create(assignment)
  }
  async edit(update) {
    let updated = await dbContext.Assignments.findOneAndUpdate({ _id: update.id }, update, { new: true })
    if (!updated) {
      throw new BadRequest("invalid id")
    }
    return updated
  }
  async delete(id) {
    let deleted = await dbContext.Assignments.findOneAndDelete({ _id: id })
    if (!deleted) {
      throw new BadRequest("invalid id")
    }
  }

}

export const assignmentsService = new AssignmentsService();