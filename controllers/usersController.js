const queries = require("../queries.js")
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");


const userSignUp = asyncHandler(async(req, res, next) => {
        const username = req.body.username
        const password = await bcrypt.hash(req.body.password, 10);
        const user = await queries.createNewUser(username, password )
        res.send('cool')
})

async function getAllUsers(req,res){
    const usernames = await queries.getUsers()
    console.log(usernames)
    res.json({usernames: usernames})
}

async function getuserByUsername(req, res){
    username = req.body.username
    console.log(username)
    const user = await queries.getUserByUsername(username)
    console.log(user) 
    res.send(user) 
}

async function getUserById(req, res){
    //const userId = req.body 
    // const userId = 1
    console.log(userId)
    const user = await queries.findUserById(userId)
    console.log(user)
    res.redirect("/")
}

module.exports = {
    getAllUsers,
    getuserByUsername,
    getUserById,
    userSignUp
}