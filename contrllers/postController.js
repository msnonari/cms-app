import { Post } from "../models/Post.js";

export const getAllPosts = async (req, res) => {
  const data = await Post.find();
  res.json(data);
};
