const {Router} = require("express")
const bookListController = require("../controllers/bookListController")
const bookListRouter = Router()

bookListRouter.get('/create-list', bookListController.createNewList)


module.exports = bookListRouter;