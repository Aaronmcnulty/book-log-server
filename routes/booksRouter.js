const {Router} = require("express")
const booksController = require("../controllers/booksController")
const booksRouter = Router()

booksRouter.get("/users", booksController.getUsersBooks)


module.exports = booksRouter;