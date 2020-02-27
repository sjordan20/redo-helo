require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')

const authCtrl = require(`./controllers/authController`)
const postCtrl = require(`./controllers/postController`)

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

const app = express()
app.use(express.json())

app.use(session({
    resave: false,
    saveUninitialized: true,
    rejectUnauthorized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    secret: SESSION_SECRET
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db)
    console.log(`||----db is here to party---||`)
})

app.listen(SERVER_PORT, () => console.log(`||----Listening on ${SERVER_PORT}----||`))

// auth endpoints

app.post(`/api/register`, authCtrl.register)
app.post(`/api/login`, authCtrl.login)

// post endpoints

// app.get(`/api/posts/:id`, postCtrl.searchTitle)
app.get(`/api/posts`, postCtrl.getPost)
app.post(`/api/posts/:id`, postCtrl.addPost)
app.put(`/api/posts/:id`, postCtrl.editPost)
app.delete(`/api/posts/:post_id`, postCtrl.deletePost)