const { connectDB, disconnectDB } = require("./db/db");
const productController = require("./controllers/productController");
const cliVIew = require("./views/productCLIViews");
const readlinesync = require("readline-sync");
