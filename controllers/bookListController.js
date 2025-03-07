
const queries = require("../queries.js")

async function createNewList(req,res){
    // const userId = req.user.id
    const listDetails = req.body
    await queries.createList(listDetails)
    res.redirect("/")
}

async function getUserList(req, res){
    // const userId = req.user.id
    const listDetails = req.body
    const list = await queries.getListById(listDetails)
    console.log(list)
    res.redirect("/")
}

async function deleteBookFromList(req, res){
    const bookData = req.body.title
    const listData = req.body.name
    await queries.removeBookFromList(bookData,listData)
    res.redirect("/")
}

module.exports = {
    createNewList,
    getUserList,
    deleteBookFromList
}



