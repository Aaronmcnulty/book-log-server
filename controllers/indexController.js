const queries = require("../queries.js")

async function getIndex(req, res){
    res.send("Hello, world!")
}

module.exports = {
   getIndex
}