import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
