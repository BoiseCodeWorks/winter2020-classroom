import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";


class SubmissionsService {
  async find(query = {}) {
    return await dbContext.Submissions.find(query)
  }
  async findById(id) {
    let submission = await dbContext.Submissions.findById(id)
    if (!submission) {
      throw new BadRequest("invalid id")
    }
    return submission
  }
  async create(submission) {
    return await dbContext.Submissions.create(submission)
  }
  async edit(update) {
    let updated = await dbContext.Submissions.findOneAndUpdate({ _id: update.id }, update, { new: true })
    if (!updated) {
      throw new BadRequest("invalid id")
    }
    return updated
  }
  async delete(id) {
    let deleted = await dbContext.Submissions.findOneAndDelete({ _id: id })
    if (!deleted) {
      throw new BadRequest("invalid id")
    }
  }

}

export const submissionsService = new SubmissionsService();