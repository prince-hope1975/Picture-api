import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// function to enable us connect to mongodb
const connectToMongo = async (callback) => {
  mongoose
    .connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to db"))
    .then(() => callback())
    .catch((err) => console.error("Failed to connect to db", err));
};


export { connectToMongo,};
