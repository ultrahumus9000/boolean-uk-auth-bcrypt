import { getAllUser, createOneUser } from "./constroller";
import { Router } from "express";

const userRouter = Router();

userRouter.route("/users").post(createOneUser).get(getAllUser);

export default userRouter;
