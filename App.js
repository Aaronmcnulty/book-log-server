const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const indexRouter = require("./routes/indexRouter")
const usersRouter = require("./routes/usersRouter")
const booksRouter = require("./routes/booksRouter")
const bookListRouter = require("./routes/bookListRouter")
const session = require('express-session');
const passport = require('passport')
const jwt = require('jsonwebtoken')
const cors = require('cors');
require('./config/passport') 

app.use(cors());  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());

app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));
app.get('/login-success', (req, res) => {
  const user = req.user.username
  jwt.sign({ user }, 'secretKey', (err, token) => {
    res.json({ token })
  })
})


app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/books', booksRouter)
app.use('/book-list', bookListRouter)


app.post('/post', verifyToken,(req, res) => {
  jwt.verify(req.token, 'secretKey',  {expiresIn: '2h'}, (err, authdata) => {
    if (err) {
      res.sendStatus(403)
    } else {
      res.json(
        {
          message: 'Posty',
          authdata
        })
    }
  })
})

app.post(
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "/login-success",
    failureRedirect: "/"
  })
);


function verifyToken (req, res, next) {
  const bearerHeader = req.headers['authorization']
  if(typeof bearerHeader !== 'undefined'){
    const bearer = bearerHeader.split(' ')

    const bearerToken = bearer[1]
    req.token = bearerToken
    next()
  } else {
    res.sendStatus(403)
  }
}

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});

