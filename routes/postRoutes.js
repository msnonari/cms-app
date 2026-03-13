import express from "express";

import { addPost, addPostData, getAllPosts } from "../contrllers/postController.js";

const postRouter = express.Router();

postRouter.get("/allposts", getAllPosts);
postRouter.get("/addpost", addPost);
postRouter.post("/addpost", addPostData);

export default postRouter;
