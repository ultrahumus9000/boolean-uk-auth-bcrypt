import db from "../../database";
import { hash } from "bcrypt";
import { User } from "@prisma/client";

async function create(newUser: User) {
  const plainText = newUser.password;
  const hashedPassword = await hash(plainText, 5);
  const savedUser = await db.user.create({
    data: {
      ...newUser,
      password: hashedPassword,
    },
  });
  return savedUser;
}

const modifiedUser = {
  ...db.user,
  create,
};
export default modifiedUser;
