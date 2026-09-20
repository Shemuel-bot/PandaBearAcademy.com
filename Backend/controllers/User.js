import { db } from "../src/prisma/db.ts";
import { asyncHandler } from "express-async-handler";
import { body, validationResult } from "express-validator";
import { bcrypt } from "bcryptjs";

export const getAllUsers = asyncHandler(async (req, res) => {
    const users = await db.orm.public.User.select("id", "email", "name").all();
    res.json(users);
})