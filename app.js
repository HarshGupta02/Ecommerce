const express = require("express")
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const errorMiddleware = require("../backend/middleware/error");
const dotenv = require("dotenv");

dotenv.config({path : "backend/config/config.env"});

app.use(express.json({limit : '50mb'}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended : true, limit : '50mb'}));
app.use(fileUpload());

const product = require("../backend/routes/productRoute");
const user = require("../backend/routes/userRoute");
const order = require("../backend/routes/orderRoutes");
const payment = require("../backend/routes/paymentRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);
app.use(errorMiddleware);

module.exports = app;