import Script from "next/script";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "10 Minute School",
  url: "https://10minuteschool.com",
  description:
    "10 Minute School is the largest online education platform in Bangladesh, with over 17M+ students accessing quality education through our website, app, and social media.",
  publisher: {
    "@type": "Organization",
    name: "10 Minute School",
    logo: {
      "@type": "ImageObject",
      url: "https://10minuteschool.com/images/10mslogo-svg.svg",
    },
  },
};

const RootLayoutJsonLd = () => {
  return (
    <Script
      async
      id="root-layout-json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default RootLayoutJsonLd;
