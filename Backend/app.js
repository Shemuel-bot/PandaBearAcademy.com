import "dotenv/config"
import express from "express"
import session from "express-session"
import passport from "passport"
import "./config/passport.js"
import { indexRouter } from "./index.js"


const app = express()
app.use(express.json())

const clientOrigin = process.env.CLIENT_URL
    ? new URL(process.env.CLIENT_URL).origin
    : undefined

app.use((req, res, next) => {
    const origin = req.get("origin")
    if (origin && origin === clientOrigin) {
        res.setHeader("Access-Control-Allow-Origin", origin)
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        res.setHeader("Access-Control-Allow-Headers", "Content-Type")
        res.setHeader("Vary", "Origin")
    }

    if (req.method === "OPTIONS") return res.sendStatus(204)
    next()
})

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
