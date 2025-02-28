const express = require("express");
const app = express();
const query = require("./queries")


app.get("/", (req, res) => res.send("Hello, world!"));

query.getUsers()

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});

