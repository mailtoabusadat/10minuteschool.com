import type { Metadata } from "next";
const title = {
  template: "%s | 10 Minute School",
  default: "10 Minute School - The Largest Online Classroom of Bangladesh.",
};
const description =
  "10 Minute School is the largest online education platform in Bangladesh, with over 17M+ students accessing quality education through our website, app, and social media.";
const logoUrl = "/image/10mslogo-svg.svg";
const url = "https://10minuteschool.com";
const siteName = "10 Minute School";

const RootLayoutMetadata: Metadata = {
  title,
  description,
  keywords: [
    "school",
    "education",
    "learning",
    "bangladesh",
    "e-learning",
    "edtech",
    "10 minute school",
    "10minuteschool",
    "10ms",
  ],
  alternates: {
    canonical: "https://10minuteschool.com",
    languages: {
      en: "https://10minuteschool.com/en",
    },
  },
  openGraph: {
    title,
    description,
    url,
    images: [logoUrl],
    siteName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title,
    // card: "app",
    description,
    images: [logoUrl],
    creator: "10 minute school",
  },
  appLinks: {
    ios: {
      url: "https://apps.apple.com/us/app/10-minute-school/id1577061772",
      app_store_id: "id1577061774",
    },
    android: {
      package: "com.a10minuteschool.tenminuteschool",
      app_name: "10 Minute School: Learning App",
    },
    web: {
      url,
      should_fallback: true,
    },
  },
};
export default RootLayoutMetadata;
