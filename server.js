const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://<dbuser>:<dbpassword>@ds145158.mlab.com:45158/heroku_5ws4jvbv", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/htmlRoutes.js"))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});