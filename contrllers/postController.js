import { Post } from "../models/Post.js";

export const getAllPosts = async (req, res) => {
  const data = await Post.find();
  res.json(data);
};

export const addPost = async (req, res) => {
  res.render("admin/addpost");
};

export const addPostData = async (req, res) => {
  const { ptitle, pbody } = req.body;
  try {
    const post = new Post({
      postTitle: ptitle,
      postBody: pbody,
    });

    await post.save();

    console.log("Post added.");
    res.redirect("/dashboard");
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};
