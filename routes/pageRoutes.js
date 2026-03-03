import express from "express";

import { homePage, aboutPage, contactPage, postPage } from "../contrllers/pageController.js";

const pageRouter = express.Router();

pageRouter.get("/", homePage);
pageRouter.get("/about", aboutPage);
pageRouter.get("/contact", contactPage);
pageRouter.get("/post", postPage);

export default pageRouter;
