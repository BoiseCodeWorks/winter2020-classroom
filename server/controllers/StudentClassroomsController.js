import { studentClassroomsService } from "../services/StudentClassroomsService";
import BaseController from "../utils/BaseController";


export class StudentClassroomsController extends BaseController {
  constructor() {
    super("api/studentClassrooms")
    this.router
      .post("", this.create)
      .delete("/:id", this.delete)
  }
  async create(req, res, next) {
    try {
      let data = await studentClassroomsService.create(req.body)
      res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      await studentClassroomsService.delete(req.params.id)
      res.send("delorted")
    } catch (error) {
      next(error)
    }
  }

}