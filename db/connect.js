const dotenv = require('dotenv');
dotenv.config();
//const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

let _db;

const initDb = (callback) => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }

  try {
    mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true });
    const _db = mongoose.connection;
    _db.on("error", console.error.bind(console, "connection error: "));
    _db.once('open', (_db) => {
      callback(null, _db);
    })

    
  } catch (error) {
      callback(error);
  }
};

const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};

module.exports = {
  initDb,
  getDb,
};
