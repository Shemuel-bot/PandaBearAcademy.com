import express from "express";
const router = express.Router();
const UserController = require("../controllers/User.js");

const app = express();
app.use(express.json());

app.use("/users", router);

router.get("/", UserController.getAllUsers);



app.listen(3000, () => console.log("Server running on port 3000"));