const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cashflow = require("./routes/cashFlow");
const category = require("./routes/category");
const uploadAws = require("./routes/uploadAws");

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/v1/cashflow", cashflow);
app.use("/api/v1/category", category);
app.use("/api/v1/upload-aws", uploadAws);

module.exports = app;
