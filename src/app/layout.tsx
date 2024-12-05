import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import BackToTop from "@/components/others/BackToTop";
import RootLayoutJsonLd from "@/components/seo/RootLayoutJsonLd";
import theme from "@/theme";
import { Box } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import NextTopLoader from "nextjs-toploader";
import "./globals.scss";
import RootLayoutMetadata from "@/components/seo/RootLayoutMetadata";
export const metadata = RootLayoutMetadata;

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <RootLayoutJsonLd />
      <body>
        <NextTopLoader color="#074dc6" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Box
              component="main"
              sx={{
                mt: 5,
              }}
            >
              {children}
            </Box>
            <Footer />
            <BackToTop />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};
export default RootLayout;
