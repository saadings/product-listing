import { PrismaClient } from "@prisma/client";

export async function GET() {
  try {
    const prisma = new PrismaClient();

    const products = await prisma.product.findMany();

    const updatePromises = products.map((product) => {
      const randomPrice = Math.floor(Math.random() * 1000) + 1; // Random price between 1 and 1000
      return prisma.product.update({
        where: { id: product.id },
        data: { price: randomPrice },
      });
    });

    await Promise.all(updatePromises);

    await prisma.$disconnect();

    return Response.json({ message: "Cron job executed." });
  } catch (error) {
    return Response.json({ error });
  }
}
