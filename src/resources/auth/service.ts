import db from "../../database";
import { compare } from "bcrypt";
import { User } from "@prisma/client";

async function findUserInfo(user: User) {
  const { email, password } = user;
  const preCheckUser = await db.user.findUnique({
    where: {
      email,
    },
  });
  if (!preCheckUser) {
    throw new Error("Username incorrect");
  }

  const secondCheck = await compare(password, preCheckUser.password);

  if (!secondCheck) {
    throw new Error("Password incorrect");
  }
  return preCheckUser;
}

export default findUserInfo;
