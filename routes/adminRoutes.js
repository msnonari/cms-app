import express from "express";
import { dashboard } from "../contrllers/adminController.js";

const adminRouter = express.Router();

adminRouter.get("/dashboard", dashboard);

export default adminRouter;
