import express from "express";
import path from "node:path";
import dotenv from "dotenv";
import session from "express-session";
import { fileURLToPath } from "node:url";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import pageRouter from "./routes/pageRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
import postRouter from "./routes/postRoutes.js";

dotenv.config();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

connectDB();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(
  session({
    secret: "perception",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60,
    },
  }),
);

app.use(userRouter);
app.use(pageRouter);
app.use(adminRouter);
app.use(postRouter);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
