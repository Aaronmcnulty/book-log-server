
const queries = require("../queries.js")

async function createNewList(req,res){
    // const userId = req.user.id
    const listDetails = req.body
    await queries.createList(listDetails, userId)
    res.redirect("/")
}

async function getUserList(req, res){
    // const userId = req.user.id
    const listDetails = req.body
    const list = await queries.getListById(listDetails)
    console.log(list)
    res.redirect("/")
}
module.exports = {
    createNewList,
    getUserList
}



