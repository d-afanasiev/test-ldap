const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const usersRouter = require("./routes/api/users");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", usersRouter);

module.exports = app;
