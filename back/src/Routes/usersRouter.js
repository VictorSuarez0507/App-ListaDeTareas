const express = require("express");
const usersController = require("../controllers/usersController");
const validateToken = require("../middlewares/validateToken");
const loginController = require("../controllers/loginController");
const Router = express.Router();

Router.post("/",usersController.createUser)

Router.post("/login", loginController, validateToken)

module.exports = Router;