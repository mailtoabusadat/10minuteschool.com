import HeroSection from "@/components/page-components/home/product/HeroSection";

const getData = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${slug}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json();
};

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const productData = await getData(slug);
  return (
    <>
      <HeroSection {...productData} />
    </>
  );
};

export default ProductPage;
