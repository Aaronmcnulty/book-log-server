const {Router} = require("express")
const bookListController = require("../controllers/bookListController")
const bookListRouter = Router()

bookListRouter.post('/create-list', bookListController.createNewList)


module.exports = bookListRouter;