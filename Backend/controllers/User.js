import { db } from "../src/prisma/db.ts";
import { asyncHandler } from "express-async-handler";
import { body, validationResult } from "express-validator";
import { bcrypt } from "bcryptjs";
import { JsonWebTokenError, jwt } from "jsonwebtoken";


export const getAllUsers = asyncHandler(async (req, res) => {
    const users = await db.orm.public.User.select("id", "email", "name").all();
    res.json(users);
})

export const userPost = [
    body("email", "email must not be empty").trim().isLength({ min: 2}).escape,
    body("username", "username needs to be filled").trim().isLength({min: 2}),
    body("name", "give me your real name.").trim().isLength({min:2}),
    body("password", "password must be nice").trim().isLength({min:2}).escape,
    asyncHandler(async (req, res) => {
        const error = validationResult(req);
        const password = await bcrypt
            .hash(req.body.password, 10)
            .then(hash => hash)
            .catch(err => console.log(err));
        if(!error.isEmpty()){
            res.json({
                message: error.array()
            })
        }else{
            await db.orm.public.User.create({
                email: req.body.email,
                password: password,
                username: req.body.username,
                name: req.body.name,

            })
        }
    })

]

export const logIn = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if(typeof email !== 'string' || typeof password !== 'string'){
        return res.status(401).json({ message: false})
    }

    const user = await db.orm.public.User.where("email")
    .select({ email })
    .include("enrollment")
    .first();

    if (!user || !(await bcrypt.compare(password, user.password))){
        return res.status(401).json({message: false});
    }

    const token = jwt.sign(
        {
            id: user.id,
            email: user.email,
            username: user.username,
            name: user.name,
            courses: user.enrollment,
            joined: user.createdAt,
            lastUpdated: user.updatedAt
        },
        process.env.JWT_SECRET,
        {expiresIn: "1d"}

    )

    res.json({
        message: true,
        token,
        user: user
    })

})