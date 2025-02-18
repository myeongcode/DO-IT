import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI 환경 변수가 정의되지 않았습니다.');
}

let mongooseCached = global.mongoose;

if (!mongooseCached) {
  mongooseCached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (mongooseCached.conn) {
    return mongooseCached.conn;
  }

  if (!mongooseCached.promise) {
    mongooseCached.promise = mongoose.connect(MONGODB_URI);
  }
  mongooseCached.conn = await mongooseCached.promise;
  return mongooseCached.conn;
}

export default dbConnect;
