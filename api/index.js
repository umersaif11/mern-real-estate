import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is listening on port 3000!");
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api/user", userRouter);
