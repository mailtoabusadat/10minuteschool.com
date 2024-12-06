"use client";
import { AppBar, Box, Container, IconButton, Toolbar } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import HorizontalMenu from "./HorizontalMenu";
import VerticalMenu from "./VerticalMenu";
import LocaleSwitcher from "@/components/others/LocaleSwitcher";

const Header = () => {
  const [drawer, setDrawer] = useState(false);
  const props = {
    drawer,
    setDrawer,
  };
  return (
    <>
      <Box component="header">
        <AppBar
          component="nav"
          color="transparent"
          position="fixed"
          sx={{ bgcolor: "rgba(255,255,255,0.9) !important" }}
        >
          <Container maxWidth="lg">
            <Toolbar
              disableGutters
              sx={{
                columnGap: 5,
                justifyContent: { xs: "space-between", md: "flex-start" },
              }}
            >
              <Link href="/">
                <Box
                  sx={{ display: "flex", maxWidth: "150px", minWidth: "120px" }}
                >
                  <Image
                    src="/images/logo-horizontal.png"
                    alt="logo"
                    width={3263}
                    height={911}
                  />
                </Box>
              </Link>
              <HorizontalMenu />
              <LocaleSwitcher />
              <IconButton
                aria-label="delete"
                onClick={() => setDrawer(true)}
                sx={{ display: { xs: "inline-flex", md: "none" } }}
              >
                <FaBars />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />
      </Box>
      <VerticalMenu {...props} />
    </>
  );
};
export default Header;
