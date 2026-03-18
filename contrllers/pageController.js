import { Post } from "../models/Post.js";

export const homePage = async (req, res) => {
  const data = await Post.find();
  res.render("index", { posts: data });
};

export const aboutPage = (req, res) => {
  res.render("about");
};

export const contactPage = (req, res) => {
  res.render("contact");
};

export const postPage = (req, res) => {
  res.render("post");
};

export const loginPage = (req, res) => {
  res.render("login");
};

export const registerPage = (req, res) => {
  res.render("register");
};
