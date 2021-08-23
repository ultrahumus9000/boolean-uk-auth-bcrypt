import express from "express";
const cookieParser = require("cookie-parser");

const logger = require("morgan");

import userRouter from "./resources/user/router";
import authenRouter from "./resources/auth/router";

const app = express();

app.use(logger("dev"));
app.use(express.json());

app.use(cookieParser());

app.use(userRouter);
app.use(authenRouter);

module.exports = app;
