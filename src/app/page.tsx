import ProductCard from "@/components/ProductCard";
import { product } from "@prisma/client";

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
    cache: "no-cache",
  });

  const products = await response.json();

  return (
    <main className="h-screen flex justify-center items-center">
      <div className="flex flex-row justify-center items-center space-x-5">
        {products?.map((product: product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            body={product.description}
            price={product.price.toString()}
            rating={product.rating}
          />
        ))}
      </div>
    </main>
  );
}
