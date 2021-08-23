import { PrismaClient } from "@prisma/client";
import * as faker from "faker";
const prisma = new PrismaClient();

export async function main() {
  const result = await prisma.user.createMany({
    data: [
      {
        email: faker.internet.email(),
        password: faker.internet.password(),
      },
      {
        email: faker.internet.email(),
        password: faker.internet.password(),
      },
      {
        email: faker.internet.email(),
        password: faker.internet.password(),
      },
      {
        email: faker.internet.email(),
        password: faker.internet.password(),
      },
      {
        email: faker.internet.email(),
        password: faker.internet.password(),
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
