const queries = require("../queries")

async function getAllUsers(req,res){
    const usernames = await queries.getUsers()
    console.log(usernames)
    res.redirect("/")
}

async function getuserByUsername(req, res){
    const username = req.body.username
    console.log(username)
    const user = await queries.getUserByUsername(username)
    console.log(user) 
    res.redirect("/")
}

async function getUserById(req, res){
    //const userId = req.body
    const userId = 1
    console.log(userId)
    const user = await queries.findUserById(userId)
    console.log(user)
    res.redirect("/")
}

module.exports = {
    getAllUsers,
    getuserByUsername,
    getUserById
}