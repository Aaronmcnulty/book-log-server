
const queries = require("../queries")

async function createNewList(req,res){
    const listDetails = req.body
    await queries.createList(listDetails)
    res.redirect("/")
}

module.exports = {
    createNewList,
}



