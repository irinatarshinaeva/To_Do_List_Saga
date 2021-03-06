const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  autoIndex: true,
  poolSize: 10,
  bufferMaxEntries: 0,
};

const dbConnectionURL = process.env.DB || 'mongodb://localhost:27017/toDoList';

function dbConnect() {
  mongoose.connect(process.env.DB, options, (err) => {
    if (err) return console.log(err);
    return console.log('Success connected to mongo');
  });
}

module.exports = dbConnect;
