"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import localFont from "next/font/local";

const roboto = localFont({
  src: [
    {
      path: "../public/fonts/roboto/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/roboto/Roboto-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/roboto/Roboto-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

const poppins = localFont({
  src: [
    {
      path: "../public/fonts/poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins/Poppins-SemiBold.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/poppins/Poppins-Bold.ttf",
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
      secondary: "#454655", // For secondary text (e.g., subtitles)
    },
    primary: {
      50: "#ecf9ff",
      100: "#d5efff",
      light: "#074dc6",
      main: "#0d47a1",
      dark: "#0d2b5e",
      contrastText: "#fff",
    },
    secondary: {
      50: "#f7f7f8", //using bg color
      100: "#ededf1", //using bg color
      light: "#5a5c6f",
      main: "#454655",
      dark: "#3f404d",
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
    fontFamily: [roboto.style.fontFamily, poppins.style.fontFamily].join(","),
    htmlFontSize: 16,
    fontSize: 14,
    h1: {
      color: "#383842",
      fontSize: "2.5rem",
      fontFamily: poppins.style.fontFamily,
      fontWeight: 500,
    },
    h2: {
      color: "#383842",
      fontSize: "2rem",
      fontFamily: poppins.style.fontFamily,
      fontWeight: 500,
    },
    h3: {
      color: "#383842",
      fontSize: "1.75rem",
      fontFamily: poppins.style.fontFamily,
      fontWeight: 500,
    },
    h4: {
      color: "#383842",
      fontSize: "1.5rem",
      fontFamily: poppins.style.fontFamily,
      fontWeight: 500,
    },
    h5: {
      color: "#383842",
      fontSize: "1.25rem",
      fontFamily: poppins.style.fontFamily,
      fontWeight: 500,
    },
    h6: {
      color: "#383842",
      fontSize: "1rem",
      fontFamily: poppins.style.fontFamily,
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
            color: "#0d47a1",
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
