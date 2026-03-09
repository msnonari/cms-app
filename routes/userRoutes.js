import express from "express";
import { addUser, getAllUsers, loginUser } from "../contrllers/userController.js";

const userRouter = express.Router();

userRouter.post("/adduser", addUser);
userRouter.get("/getallusers", getAllUsers);

userRouter.post("/login", loginUser);
export default userRouter;
