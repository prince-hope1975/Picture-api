import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { router } from "./routes/pics.js";

import { connectToMongo } from "./db/conn.js";
const app = express();
const port = process.env.PORT;

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

const connectToDeviceServer = (err) => {
  try {
    app.listen(port, () => console.log(`Hello im connected to port: ${port}`));
  } catch (e) {
    console.error("Failed to start server: ", e);
  }
};

connectToMongo(connectToDeviceServer);
