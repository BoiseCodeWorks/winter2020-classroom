import { submissionsService } from "../services/SubmissionsService";
import BaseController from "../utils/BaseController";


export class SubmissionsController extends BaseController {
  constructor() {
    super("api/submissions")
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await submissionsService.find(req.query)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getById(req, res, next) {
    try {
      let data = await submissionsService.findById(req.params.id)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let data = await submissionsService.create(req.body)
      res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      let data = await submissionsService.edit(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      await submissionsService.delete(req.params.id)
      res.send("delorted")
    } catch (error) {
      next(error)
    }
  }

}