import express from "express";
import { addUser, getAllUsers } from "../contrllers/userController.js";

const userRouter = express.Router();

router.get("/adduser", addUser);
router.get("/getallusers", getAllUsers);

export default userRouter;
