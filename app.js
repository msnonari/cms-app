import express from "express";
import path from "node:path";
import dotenv from "dotenv";
import { fileURLToPath } from "node:url";
import { connectDB } from "./config/db.js";
import { User } from "./models/User.js";

dotenv.config();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

connectDB();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/adduser", async (req, res) => {
  try {
    await User.create({
      firstName: "Qasim",
      lastName: "Zia",
      email: "zia@gmail.com",
      password: "5544sdfsd",
      mobile: "0300-4455656",
      address: "Kamalia",
    });
    console.log("Record added.");
    res.send("Record added.");
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
});
app.get("/getall", async (req, res) => {
  const data = await User.find();
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
