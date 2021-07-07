const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const port = 5000;
const app = express();
const PORT = process.env.PORT || port;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongodb databse connected");
});

const postRouter = require("./routes/post");
const usersRouter = require("./routes/users");

app.use("/posts", postRouter);
app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log("app running in port " + PORT);
});
