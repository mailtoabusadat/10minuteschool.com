import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

const HomePage = async ({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) => {
  const { locale } = await params;
  const t = await getTranslations("HomePage");
  return (
    <>
      {/* <img src="/file.svg" /> */}
      <Image
        src="/images/logo-horizontal.png"
        alt="logo"
        width={3263}
        height={911}
      />
      <h1>{locale != "bn" ? t("title", { name: "sadat" }) : "hee"}</h1>
      <Link href="/about">{t("about")}</Link>
    </>
  );
};
export default HomePage;
