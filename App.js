const express = require("express");
const app = express();
const query = require("./queries")
const usersRouter = require("./routes/userRouter")

app.get("/", (req, res) => res.send("Hello, world!"));
app.use("/users", usersRouter)

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});

