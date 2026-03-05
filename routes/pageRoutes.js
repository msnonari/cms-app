import express from "express";

import { homePage, aboutPage, contactPage, postPage, loginPage, registerPage } from "../contrllers/pageController.js";

const pageRouter = express.Router();

pageRouter.get("/", homePage);
pageRouter.get("/about", aboutPage);
pageRouter.get("/contact", contactPage);
pageRouter.get("/post", postPage);
pageRouter.get("/login", loginPage);
pageRouter.get("/register", registerPage);

export default pageRouter;
