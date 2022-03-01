import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
// const uri = process.env.ATLAS_URI;
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })


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
