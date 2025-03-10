const {Router} = require("express")
const usersController = require("../controllers/usersController")
const usersRouter = Router()

usersRouter.get('/users', usersController.getAllUsers)
usersRouter.get('/username', usersController.getuserByUsername)
usersRouter.get('/user-by-id', usersController.getUserById)
usersRouter.post('/user-signup', usersController.userSignUp)

module.exports = usersRouter;