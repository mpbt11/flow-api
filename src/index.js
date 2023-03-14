const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const consign = require("consign");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

consign({ cwd: "src" }).then("./routes").into(app);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server running on port: ${port}`));
