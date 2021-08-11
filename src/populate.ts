import { PrismaClient } from "@prisma/client";
import "dotenv/config";

import faker from "faker/locale/nb_NO";
const prisma = new PrismaClient();

const main = async () => {
  const user = await prisma.user.create({
    data: {
      name: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    },
  });

  const split = await prisma.split.create({
    data: {
      name: "Spleiselaget",
      userId: user.id,
    },
  });

  await prisma.unit.create({
    data: {
      name: "Vodka",
      amount: 750,
      price: 490,
      splitId: split.id,
    },
  });

  await prisma.unit.create({
    data: {
      name: "Tequila",
      amount: 750,
      price: 510,
      splitId: split.id,
    },
  });

  await prisma.unit.create({
    data: {
      name: "Rum",
      amount: 500,
      price: 275,
      splitId: split.id,
    },
  });
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
