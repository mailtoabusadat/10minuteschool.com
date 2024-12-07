import BackToTop from "@/components/others/BackToTop";
import RootLayoutJsonLd from "@/components/seo/RootLayoutJsonLd";
import RootLayoutMetadata from "@/components/seo/RootLayoutMetadata";
import { Locale, routing } from "@/i18n/routing";
import "@/styles/globals.scss";
import theme from "@/theme";
import { Box } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import "swiper/css";
export const metadata = RootLayoutMetadata;

const RootLayout = async ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) => {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <RootLayoutJsonLd />
      <body>
        <NextTopLoader color="#074dc6" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <NextIntlClientProvider messages={messages}>
              <CssBaseline />
              <Box component="main">{children}</Box>
              <BackToTop />
            </NextIntlClientProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};
export default RootLayout;
