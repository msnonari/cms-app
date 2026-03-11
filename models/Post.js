import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    postTitle: { type: String, required: true },
    postBody: { type: String, required: true },
  },
  { timestamps: true },
);

export const Post = mongoose.model("Post", postSchema);
