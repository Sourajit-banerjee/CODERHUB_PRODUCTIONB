const mongoose = require("mongoose");
const env = require("./environment");
//`mongodb+srv://mongoUser:mongoUser@cluster0.qyh17.mongodb.net/socialarray?retryWrites=true&w=majority`
//CHANGED
mongoose.connect(
  `mongodb://localhost/${env.db}`
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "error in conncting to DB"));

db.once("open", function () {
  console.log("connected to database::MOngoDb");
});

module.exports = db;
