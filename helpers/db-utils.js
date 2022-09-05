import { MongoClient } from "mongodb";

const dbName = process.env.mongodbDatabase;

export const connectDatabase = async () => {
  const url = `mongodb+srv://${process.env.mongodbUserName}:${process.env.mongodbPassword}@${process.env.mongodbClusterName}.7art7wy.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(url);
  await client.connect();
  return client;
};

export const insertDocument = async (client, collection, document) => {
  const coll = client.db(dbName).collection(collection);
  return await coll.insertOne(document);
};
