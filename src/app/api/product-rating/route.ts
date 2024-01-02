import { PrismaClient } from "@prisma/client";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const productName = searchParams.get("productName");

    if (!productName) {
      return Response.json({ message: "Missing fields" });
    }

    const prisma = new PrismaClient();

    const products = await prisma.product.findFirst({
      where: {
        name: productName?.toLowerCase(),
      },
    });

    if (!products) {
      await prisma.$disconnect();

      return Response.json({ message: "Product not found" });
    }

    const productRatings = await prisma.product_rating.findMany({
      where: {
        productId: products.id,
      },
      select: {
        id: true,
        rating: true,
        product: {
          select: {
            name: true,
          },
        },
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    await prisma.$disconnect();

    return Response.json(productRatings);
  } catch (error) {
    return Response.json({ error });
  }
}
