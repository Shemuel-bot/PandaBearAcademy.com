import express from "express";
import { db } from "./src/prisma/db.ts";

const app = express();
app.use(express.json());

app.get("/users", async (req, res) => {
  const users = await db.orm.public.User.select("id", "email", "name").all();
  res.json(users);
});

app.post("/users", async (req, res) => {
  const user = await db.orm.public.User.create(req.body);
  res.json(user);
});

app.listen(3000, () => console.log("Server running on port 3000"));