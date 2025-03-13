const {Router} = require("express")
const booksController = require("../controllers/booksController")
const booksRouter = Router()

const cors = require('cors');

booksRouter.post("/add-to-list", verifyToken, booksController.addBookToList)
booksRouter.get("/get-users-book", verifyToken, booksController.findUsersBook)
booksRouter.post("/:currenttitle/update-book", booksController.updateBookDetails)

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


module.exports = booksRouter;