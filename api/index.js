import cookieParser from "cookie-parser";
import express from "express";
import multer from "multer";
import path from "path";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

const port = process.env.PORT || 8800;

const app = express();

app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/build/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.get("/", (req, res) => {
  // res.json({ msg: "its works" });
  app.use("/", express.static(path.resolve("..", "client", "build")));
  res.sendFile(path.resolve("..", "client", "build", "index.html"));
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(port, () => {
  console.log("Connected to port", port);
});
