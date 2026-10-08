import express from "express";
const router = express.Router();
import {getAllUsers, userPost, logIn} from './controllers/User.js'
import passport from "passport";
import jwt from "jsonwebtoken";
import './config/passport.js'


router.get("/users/v1", getAllUsers);
router.post("/users/v1", userPost);
router.post("/users/v1/login", logIn)


router.get(
    '/auth/google',
    passport.authenticate('google', {scope: ['profile', 'email']})
)
router.get(
    '/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: `${process.env.CLIENT_URL}/sign-in` //remember to add an actual url redirect or client url
    }),
    (req, res) => {
        const user = req.user;
        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                username: user.username,
                name: user.name,
            },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000,
        });
        res.redirect(`${process.env.CLIENT_URL}/home`);
    }
)
router.get('/auth/me', async (req, res) => {
    const authorization = req.get("Authorization")
    if (authorization) {
        const match = authorization.match(/^Bearer\s+(\S+)$/i)
        if (!match) return res.status(401).json({ user: null, message: false })

        try {
            const user = jwt.verify(match[1], process.env.JWT_SECRET)
            if (typeof user !== "object" || user === null) {
                return res.status(401).json({ user: null, message: false })
            }
            return res.json({ user })
        } catch (error) {
            if (error instanceof jwt.JsonWebTokenError) {
                return res.status(401).json({ user: null, message: false })
            }
            throw error
        }
    }

    if (!req.isAuthenticated()) return res.status(401).json({ user: null, message: false })
    return res.json({ user: req.user })
})
router.post('/auth/logout', async (req, res, next) => {
    req.logOut((err) => {
        if(err) return next(err)
        req.session.destroy((sessionError) => {
            if(sessionError) return next(sessionError)
            res.clearCookie("token", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
            });
            res.sendStatus(204)
        })
    })
})

export const indexRouter = router
