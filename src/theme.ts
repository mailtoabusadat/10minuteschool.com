"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import localFont from "next/font/local";

const inter = localFont({
  src: [
    {
      path: "../public/fonts/inter/Inter_24pt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/Inter_24pt-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/Inter_24pt-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/Inter_24pt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

const notoSansBengali = localFont({
  src: [
    {
      path: "../public/fonts/noto-sans-bengali/NotoSansBengali-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/noto-sans-bengali/NotoSansBengali-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/noto-sans-bengali/NotoSansBengali-SemiBold.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/noto-sans-bengali/NotoSansBengali-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

let theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "light",
    text: {
      primary: "#707387", // Default font color (for most texts)
      secondary: "#3d3d3d", // For secondary text (e.g., subtitles)
    },
    primary: {
      light: "#27c064",
      main: "#1cab55",
      dark: "#187d41",
      contrastText: "#fff",
    },
    secondary: {
      light: "#454545",
      main: "#3d3d3d",
      dark: "#000000",
      contrastText: "#000",
    },
    error: {
      light: "#ef5350",
      main: "#d32f2f",
      dark: "#c62828",
      contrastText: "#000",
    },
    warning: {
      light: "#ff9800",
      main: "#ed6c02",
      dark: "#e65100",
      contrastText: "#000",
    },
    info: {
      light: "#03a9f4",
      main: "#0288d1",
      dark: "#01579b",
      contrastText: "#fff",
    },
    success: {
      light: "#4caf50",
      main: "#2e7d32",
      dark: "#1b5e20",
      contrastText: "#000",
    },
    //experimental myself
    white: {
      light: "#ffffff",
      main: "#efefef",
      dark: "#dcdcdc",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: [inter.style.fontFamily, notoSansBengali.style.fontFamily].join(
      ","
    ),
    htmlFontSize: 16,
    fontSize: 14,
    h1: {
      color: "#383842",
      fontSize: "2.5rem",
      fontFamily: inter.style.fontFamily,
      fontWeight: 500,
    },
    h2: {
      color: "#383842",
      fontSize: "2rem",
      fontFamily: inter.style.fontFamily,
      fontWeight: 500,
    },
    h3: {
      color: "#383842",
      fontSize: "1.75rem",
      fontFamily: inter.style.fontFamily,
      fontWeight: 500,
    },
    h4: {
      color: "#383842",
      fontSize: "1.5rem",
      fontFamily: inter.style.fontFamily,
      fontWeight: 500,
    },
    h5: {
      color: "#383842",
      fontSize: "1.25rem",
      fontFamily: inter.style.fontFamily,
      fontWeight: 500,
    },
    h6: {
      color: "#383842",
      fontSize: "1rem",
      fontFamily: inter.style.fontFamily,
      fontWeight: 500,
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { severity: "info" },
              style: {
                backgroundColor: "#60a5fa",
              },
            },
          ],
        },
      },
    },
    MuiPopover: {
      defaultProps: {
        disableScrollLock: true,
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          color: "inherit", // Default color
          textDecoration: "none",
          transition: "all linear 0.3s",
          "&:hover": {
            color: "#1cab55",
          },
        },
      },
    },
  },
});
theme = responsiveFontSizes(theme);

// Extend the palette to include the custom colors
declare module "@mui/material/styles" {
  interface Palette {
    white: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    };
  }
  interface PaletteOptions {
    white?: {
      light?: string;
      main?: string;
      dark?: string;
      contrastText?: string;
    };
  }
}
export default theme;
