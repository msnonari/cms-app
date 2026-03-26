import express from "express";
import { addUser, getAllUsers, loginUser, logoutUser } from "../contrllers/userController.js";

const userRouter = express.Router();

userRouter.post("/adduser", addUser);
userRouter.get("/getallusers", getAllUsers);

userRouter.post("/login", loginUser);
userRouter.get("/logout", logoutUser);
export default userRouter;
