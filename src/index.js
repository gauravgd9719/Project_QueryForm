const express = require("express");
const mongoose = require("mongoose");

const route = require("./routes/route");
const app = express();

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://gauravdhiman123:hiFunctionUp@gd-cluster.kufg7lx.mongodb.net/Project_UserQuery",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Is Connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
  console.log("express app running on port" + (process.env.PORT || 3000));
});
