// import * as Mongoose from 'mongoose';
import mongoose from 'mongoose';
import { dataInitialization } from '../utils';

let database;
export const DBConnect = () => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    dbName: process.env.DB_NAME,
  };
  if (database) {
    return;
  }
  mongoose.set('strictQuery', true);
  mongoose
    .connect(process.env.DB_HOST, options)
    .then(() => {
      database = mongoose.connection;
    })
    .catch((e) => console.log('DB connection error', e));
  mongoose.connection.on('connected', () => {
    dataInitialization().then(console.log).catch(console.warn);
    console.log('Database connected');
  });
  mongoose.connection.on('error', () => {
    console.log('Error connecting to database');
  });
};
export const DBDisconnect = () => {
  if (!database) {
    return;
  }
  mongoose
    .disconnect()
    .then(() => console.log('Database disconnected'))
    .catch((e) => console.error('Database failed to disconnected', e.message));
};
