const {Router} = require("express")
const usersController = require("../controllers/userController")
const usersRouter = Router()

usersRouter.get("/users", usersController.getAllUsers)

module.exports = usersRouter;