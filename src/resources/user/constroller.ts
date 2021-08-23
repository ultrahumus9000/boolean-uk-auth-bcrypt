import { Response, Request } from "express";
import modifiedUser from "./service";
const { create, findMany } = modifiedUser;

async function getAllUser(req: Request, res: Response) {
  try {
    const result = await findMany();
    res.json(result);
  } catch (error) {
    console.log(error);
  }
}

async function createOneUser(req: Request, res: Response) {
  try {
    const newUser = req.body;
    const updatedNewUser = await create(newUser);
    res.json(updatedNewUser);
  } catch (error) {
    console.log(error);
  }
}

export { getAllUser, createOneUser };
