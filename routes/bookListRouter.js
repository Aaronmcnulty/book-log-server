const {Router} = require("express")
const bookListController = require("../controllers/bookListController")
const bookListRouter = Router()

bookListRouter.post('/create-list', bookListController.createNewList)
bookListRouter.get('/get-list', bookListController.getUserList)
bookListRouter.post('/remove-book', bookListController.deleteBookFromList)
module.exports = bookListRouter; 