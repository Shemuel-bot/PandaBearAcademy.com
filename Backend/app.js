import "dotenv/config"
import express from "express"
import session from "express-session"
import passport from "passport"
import "./config/passport.js"
import { indexRouter } from "./index.js"


const app = express()
app.use(express.json())

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true, sameSite: "lax", secure: false}
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/', indexRouter)



app.listen(3000, () => console.log("Server running on port 3000"));

