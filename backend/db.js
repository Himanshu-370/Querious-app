const mongoose = require("mongoose");

const url =
  "mongodb+srv://himanshu20:GACQHsQilN5GoNGA@cluster0.byyq8g8.mongodb.net/?retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
