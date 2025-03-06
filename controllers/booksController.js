const queries = require("../queries")

async function addBookToList(req,res){
    const bookDetails = req.body
    await queries.createBookEntry(bookDetails)
    res.redirect("/")
}

async function findUsersBook(req,res){
    const bookDetails = req.body
    await queries.findBookByUser(bookDetails)
    res.redirect("/")
}

module.exports = {
    addBookToList,
    findUsersBook,
}