const queries = require("../queries")

async function getAllUsers(req,res){
    const usernames = await queries.getUsers()
    console.log(usernames)
    res.redirect("/")
}



module.exports = {
    getAllUsers,
}