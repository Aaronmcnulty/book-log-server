const queries = require("../queries.js")

async function addBookToList(req,res){
    const bookDetails = req.body
    await queries.addBookToList(bookDetails)
    res.redirect("/")
}

async function findUsersBook(req,res){
    const bookDetails = req.body
    await queries.findBookByUser(bookDetails)
    res.json(bookDetails)
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