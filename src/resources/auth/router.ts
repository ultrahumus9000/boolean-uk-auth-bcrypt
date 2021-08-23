import { Router } from "express";
import getUserInfoAfterAuthentication from "./controller";
const authenRouter = Router();

authenRouter.route("/login").post(getUserInfoAfterAuthentication);

export default authenRouter;
