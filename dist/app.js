"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const router_1 = __importDefault(require("./resources/user/router"));
const router_2 = __importDefault(require("./resources/auth/router"));
const app = express_1.default();
app.use(logger("dev"));
app.use(express_1.default.json());
app.use(cookieParser());
app.use(router_1.default);
app.use(router_2.default);
module.exports = app;
