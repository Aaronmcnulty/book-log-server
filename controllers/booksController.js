const queries = require("../queries.js")
const jwt = require('jsonwebtoken')


async function addBookToList(req,res){
    let userDetails = {}
    const bookDetails = req.body
    jwt.verify(req.token, 'secretKey',(err, authdata) => {
        if (err) {
          res.sendStatus(403)
        } else {
            userDetails = {username: authdata.user.username, id: authdata.user.id}
        }
    })
    queries.addBookToList(bookDetails, userDetails)
    res.sendStatus(200)
}

async function findUsersBook(req,res){
    let userDetails = {}
    const bookDetails = req.body
    jwt.verify(req.token, 'secretKey',(err, authdata) => {
        if (err) {
          res.sendStatus(403)
        } else {
           userDetails = {username: authdata.user.username, id: authdata.user.id}
        }
    })
    const foundBook = await queries.findBookByUser(bookDetails, userDetails)
    res.json(foundBook)
}

async function updateBookDetails(req,res){
    const bookDetails = req.body
    const currentTitle = req.params.currenttitle
    await queries.updateSingleBook(bookDetails, currentTitle)
    res.redirect("/")
}

module.exports = {
    addBookToList,
    findUsersBook,
    updateBookDetails
}