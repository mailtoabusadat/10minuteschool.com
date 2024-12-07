import Product from "@/components/page-components/product/Product";
const getData = async (slug: string) => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const fetchProducts = fetch(`${url}/products/${slug}`);
  const fetchVariants = fetch(`${url}/products/${slug}/variants`);
  const [resProducts, resVariants] = await Promise.all([
    fetchProducts,
    fetchVariants,
  ]);
  if (!resProducts.ok || !resVariants.ok) {
    throw new Error("Failed to fetch");
  }
  const productsData = await resProducts.json();
  const variantsData = await resVariants.json();
  return { productsData, variantsData };
};

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const resData = await getData(slug);
  return <Product {...resData} />;
};

export default ProductPage;
