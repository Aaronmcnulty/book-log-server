const jwt = require('jsonwebtoken')
const queries = require("../queries.js")



async function createNewList(req, res){
    const listDetails = req.body
    let userDetails = {}
    jwt.verify(req.token, 'secretKey',(err, authdata) => {
      if (err) {
        res.sendStatus(403)
      } else {
        userDetails = {username: authdata.user.username, id: authdata.user.id}
      }
    })
    queries.createList(listDetails, userDetails)
    res.sendStatus(200)
  }


async function getUserList(req, res){
    const listDetails = req.body
    let userDetails = {}
    jwt.verify(req.token, 'secretKey',(err, authdata) => {
        if (err) {
            res.sendStatus(403)
        } else { 
            userDetails = {username: authdata.user.username, id: authdata.user.id}
        }
    })
    const list = await queries.getListById(listDetails,userDetails)
    res.json(list)
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



