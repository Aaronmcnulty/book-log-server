const {Router} = require("express")
const bookListController = require("../controllers/bookListController")
const bookListRouter = Router()

const cors = require('cors');

bookListRouter.post('/create-list', verifyToken, bookListController.createNewList)
bookListRouter.post('/get-list', verifyToken,  bookListController.getUserList)
bookListRouter.post('/remove-book', bookListController.deleteBookFromList)


function verifyToken (req, res, next) {
    const bearerHeader = req.headers['authorization']
    if(typeof bearerHeader !== 'undefined'){
      const bearer = bearerHeader.split(' ')
      const bearerToken = bearer[1]
      req.token = bearerToken
      next()
    } else {
      res.sendStatus(403)
    }
  }

module.exports = bookListRouter; 