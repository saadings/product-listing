import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createRandomProduct() {
  const name = `Product ${Math.random()
    .toString(36)
    .substring(7)}`.toLowerCase();
  const description = `Description for ${name}`;
  const price = Math.floor(Math.random() * 1000); // Random price between 0 and 999

  const product = await prisma.product.create({
    data: {
      name,
      description,
      price,
    },
  });

  return product;
}

export async function uploadProducts() {
  try {
    await prisma.product.deleteMany();
    const products = await Promise.all([
      createRandomProduct(),
      createRandomProduct(),
      createRandomProduct(),
    ]);

    console.log("Products created:", products);
  } catch (error) {
    console.error("Error creating products:", error);
  } finally {
    await prisma.$disconnect();
  }
}
