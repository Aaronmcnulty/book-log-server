const queries = require("../queries")

async function addBookToList(req,res){
    const bookDetails = req.body
    await queries.createBookEntry(bookDetails)
    res.redirect("/")
}

module.exports = {
    addBookToList,
}