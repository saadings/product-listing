import { PrismaClient } from "@prisma/client";

export async function POST(request: Request) {
  try {
    const { email, name, rating, productName } = await request.json();

    if (!email || !name || !rating || !productName) {
      return Response.json({ message: "Missing fields" });
    }

    const prisma = new PrismaClient();

    const user = await prisma.user.findFirst({
      where: {
        email: email.toLowerCase(),
        name: name.toLowerCase(),
      },
    });

    if (!user) {
      await prisma.user.create({
        data: {
          email: email.toLowerCase(),
          name: name.toLowerCase(),
        },
      });
    }

    const product = await prisma.product.findFirst({
      where: {
        name: productName.toLowerCase(),
      },
    });

    if (!product) {
      await prisma.$disconnect();

      return Response.json({ message: "Product not found" });
    }

    const productRating = await prisma.product_rating.create({
      data: {
        rating: parseInt(rating),
        product: {
          connect: {
            id: product.id,
          },
        },
        user: {
          connect: {
            email,
          },
        },
      },
    });

    await prisma.$disconnect();

    return Response.json({ message: "Rating Done" });
  } catch (error) {
    return Response.json({ error });
  }
}
