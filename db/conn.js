import { MongoClient} from "mongodb";
import dotenv from "dotenv"
dotenv.config()
const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
let dbConnection;
let dbClient
const connectToMongo = async (callback) => {
  client.connect((err) => {
    if (err) {
      callback(err);
      return
    }
    console.log("successfully connected to Mongodb");

     callback();
  });
};
const getDb = () => {
    dbConnection= client.db().admin().listDatabases()
  return dbConnection;
};

export { connectToMongo , getDb };
