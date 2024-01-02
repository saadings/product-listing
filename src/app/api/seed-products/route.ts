import { uploadProducts } from "@/utils/services/database";

export async function POST() {
  try {
    await uploadProducts();

    return Response.json({ message: "Products uploaded" });
  } catch (error) {
    return Response.json({ error });
  }
}
