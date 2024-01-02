import ProductTable from "@/components/ProductTable";

const page = async ({
  params: { product },
}: {
  params: { product: string };
}) => {
  const url =
    `${process.env.NEXT_PUBLIC_API_URL}/product-rating` +
    "?productName=" +
    product;

  const response = await fetch(url, { cache: "no-cache" });
  const productRating = await response.json();

  return (
    <div>
      <ProductTable ratings={productRating} />
    </div>
  );
};

export default page;
