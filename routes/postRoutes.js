import express from "express";

import { getAllPosts } from "../contrllers/postController.js";

const postRouter = express.Router();

postRouter.get("/allposts", getAllPosts);

export default postRouter;
