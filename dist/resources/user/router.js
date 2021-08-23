"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constroller_1 = require("./constroller");
const express_1 = require("express");
const userRouter = express_1.Router();
userRouter.route("/users").post(constroller_1.createOneUser).get(constroller_1.getAllUser);
exports.default = userRouter;
