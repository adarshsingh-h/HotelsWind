const express = require("express");
const authRouter = require("./routes/auth.js");
const paymentsRouter = require("./routes/payments.js");
const hotelsRouter = require("./routes/hotels.js");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

//db connection
mongoose
    .connect(process.env.DATABASE, {})
    .then((client) => {
        console.log("db connected");
    })
    .catch((err) => console.log("db connection failed: " + err));

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//routers
app.use("/api", authRouter);
app.use("/api", paymentsRouter);
app.use("/api", hotelsRouter);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
