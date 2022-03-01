import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { router } from "./routes/pics.js";

import { connectToMongo } from "./db/conn.js";
const app = express();

// Enabling Environment variables
dotenv.config();

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.json({ json: "Hello from this side" });
});
app.use("/api/v1/pictures", router);

// Get all picures from db
app.get("/api/v1/pictures");
// Upload new picture
app.post("/api/v1/pictures");
// Get specific picture
app.get("/api/v1/pictures/:id");
// Update specific picture
app.post("/api/v1/pictures/:id");
// Delete specific image
app.delete("/api/v1/pictures/:id");

const pics = [];
const port = process.env.PORT;
app.post("/pic", (req, res) => {
  const pic = req.body;

  console.log(pic);
  pics.push(pic);
  console.log("pics ", pics);
});
app.get("/pics", (req, res) => {
  res.json({ pics });
});
app.get("/pictures/:singlePicture", (req, res) => {
  const { singlePicture } = req.params;
});

const connectToDeviceServer = (err) => {
  app.listen(port, () => console.log(`Hello im connected to port: ${port}`));
};

connectToMongo(connectToDeviceServer);
