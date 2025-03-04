const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const usersRouter = require("./routes/userRouter")
const session = require('express-session');
const passport = require('passport')

require('./config/passport') 

app.get("/", (req, res) => res.send("Hello, world!"));
app.use("/users", usersRouter)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));


app.post(
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "/success",
    failureRedirect: "/fail"
  })
);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});

