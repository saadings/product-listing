import { PrismaClient } from "@prisma/client";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request) {
  try {
    const prisma = new PrismaClient();

    const products = await prisma.product.findMany();

    await prisma.$disconnect();

    return Response.json(products);
  } catch (error) {
    return Response.json({ error });
  }
}
