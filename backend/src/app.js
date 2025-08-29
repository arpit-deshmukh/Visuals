import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { createServer } from "node:http";
import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/users.routes.js";

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 8080);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

//versions 
app.use("/api/v1/users", userRoutes);


// app.get("/", (req, res) => {
//   res.send("Server is running successfully!");
// });



const start = async () => {
  const connectionDb = await mongoose.connect(MONGO_URI);
  console.log(`MONGO connected DB host : ${connectionDb.connection.host}`);

  server.listen(app.get("port"), () => {
    console.log("Listening to port 8080");
  });
};

start();
