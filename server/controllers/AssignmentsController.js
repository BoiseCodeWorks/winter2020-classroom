import { assignmentsService } from "../services/AssignmentsService";
import BaseController from "../utils/BaseController";


export class AssignmentsController extends BaseController {
  constructor() {
    super("api/assignments")
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await assignmentsService.find(req.query)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getById(req, res, next) {
    try {
      let data = await assignmentsService.findById(req.params.id)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let data = await assignmentsService.create(req.body)
      res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      let data = await assignmentsService.edit(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      await assignmentsService.delete(req.params.id)
      res.send("delorted")
    } catch (error) {
      next(error)
    }
  }

}