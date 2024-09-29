// this is mongodb connecteion

const { MongoClient } = require("mongodb");
const Db = "mongodb://localhost:27017/dodo";

let dbConnect;

module.exports = {
  connectToDb: (callback) => {
    MongoClient.connect(Db)
      .then((client) => {
        dbConnect = client.db();
        return callback();
      })
      .then(console.log("connected"))
      .catch((err) => {
        console.log(err);
        return callback(err);
      });
  },

  getDb: () => dbConnect,
};
