import express from "express";
import { dashboard } from "../contrllers/adminController.js";
import { isAuth } from "../middlewares/auth.js";

const adminRouter = express.Router();

adminRouter.get("/dashboard", isAuth, dashboard);

export default adminRouter;
