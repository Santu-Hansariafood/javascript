import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

interface MongooseGlobalCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  var mongooseCache: MongooseGlobalCache | undefined;
}

const globalWithMongoose = globalThis as typeof globalThis & {
  mongooseCache?: MongooseGlobalCache;
};

if (!globalWithMongoose.mongooseCache) {
  globalWithMongoose.mongooseCache = { conn: null, promise: null };
}

export async function connectDB(): Promise<Mongoose> {
  const cache = globalWithMongoose.mongooseCache!;

  if (cache.conn) return cache.conn;

  if (!cache.promise) {
    cache.promise = mongoose.connect(MONGODB_URI as string).then((mongoose) => mongoose);
  }

  cache.conn = await cache.promise;
  return cache.conn;
}
