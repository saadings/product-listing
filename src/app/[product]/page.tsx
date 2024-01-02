import ProductTable from "@/components/ProductTable";

const page = async ({
  params: { product },
}: {
  params: { product: string };
}) => {
  const url =
    "http://localhost:3000/api/product-rating" + "?productName=" + product;

  const response = await fetch(url, { cache: "no-cache" });
  const productRating = await response.json();

  return (
    <div>
      <ProductTable ratings={productRating} />
    </div>
  );
};

export default page;
