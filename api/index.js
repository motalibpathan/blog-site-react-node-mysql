import express from "express";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

const port = process.env.PORT || 8800;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "its works" });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(port, () => {
  console.log("Connected to port", port);
});
