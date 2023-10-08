const express = require("express");
const tasksController = require("../controllers/tasksController")

const Router = express.Router();

Router
    .route("/") 
    .post(tasksController.createTask)

    Router.get("/user/:id",tasksController.getAllTasks) 

Router
    .route("/:id")
    .get(tasksController.getTaskById)   
    .put(tasksController.updateTaskById)
    .patch(tasksController.completeTaskById)
    .delete(tasksController.deleteTaskById)

module.exports = Router;