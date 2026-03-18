import express from "express";

import { addPost, addPostData, getAllPosts, getPost } from "../contrllers/postController.js";

const postRouter = express.Router();

postRouter.get("/allposts", getAllPosts);
postRouter.get("/addpost", addPost);
postRouter.post("/addpost", addPostData);

postRouter.get("/post/:postID", getPost);

export default postRouter;
