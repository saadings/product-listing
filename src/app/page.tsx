import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main className="">
      <ProductCard
        title="Product"
        body="Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum. Lorem Ipsum has been the industry's standard the dummy text ever Lorem Ipsum..."
        price="100"
        rating={4}
      />
    </main>
  );
}
