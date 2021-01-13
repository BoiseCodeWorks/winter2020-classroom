import { assignmentsService } from "../services/AssignmentsService";
import { classroomsService } from "../services/ClassroomsService";
import BaseController from "../utils/BaseController";


export class ClassroomsController extends BaseController {
  constructor() {
    super("api/classrooms")
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/assignments", this.getAssigments)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await classroomsService.find(req.query)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getById(req, res, next) {
    try {
      let data = await classroomsService.findById(req.params.id)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getAssigments(req, res, next) {
    try {
      // what collection is being returned..... assignments
      // find me all the assignments where the 'classroom' property has a value of 'id'
      let data = await assignmentsService.find({ classroom: req.params.id })
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let data = await classroomsService.create(req.body)
      res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      let data = await classroomsService.edit(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      await classroomsService.delete(req.params.id)
      res.send("delorted")
    } catch (error) {
      next(error)
    }
  }

}