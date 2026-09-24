import express from "express";
const router = express.Router();
import UserController from './controllers/User.js'

const app = express();
app.use(express.json());

app.use("/", router);

router.get("/users/v1", UserController.getAllUsers);

router.post("/users/v1/post", UserController.userPost)



app.listen(3000, () => console.log("Server running on port 3000"));