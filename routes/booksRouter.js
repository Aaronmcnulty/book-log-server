const {Router} = require("express")
const booksController = require("../controllers/booksController")
const booksRouter = Router()

booksRouter.post("/add-to-list", booksController.addBookToList)


module.exports = booksRouter;