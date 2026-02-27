import express from "express";
import { addUser, getAllUsers, registerUser } from "../contrllers/userController.js";

const userRouter = express.Router();

userRouter.post("/adduser", addUser);
userRouter.get("/getallusers", getAllUsers);

userRouter.get("/register", registerUser);

export default userRouter;
