const {Router} = require("express")
const booksController = require("../controllers/booksController")
const booksRouter = Router()

booksRouter.post("/add-to-list", booksController.addBookToList)
booksRouter.get("/get-users-book", booksController.findUsersBook)
booksRouter.post("/:currenttitle/update-book", booksController.updateBookDetails)

module.exports = booksRouter;