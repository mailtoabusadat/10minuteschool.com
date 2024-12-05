import {
  Box,
  Container,
  Grid2,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
const Footer = () => {
  return (
    <Box sx={{ mt: 8 }}>
      <Box sx={{ py: 3, bgcolor: "primary.50" }}>
        <Container maxWidth="lg">
          <Grid2 container columnSpacing={{ xs: 2, md: 3, lg: 4 }}>
            <Grid2 size={{ xs: 12, sm: 4 }} sx={{ my: 2 }}>
              <Box sx={{ maxWidth: "150px", mb: 2, mx: "auto" }}>
                <Link href="/">
                  <Image
                    src="/image/logo-horizontal.png"
                    alt="logo"
                    width={449}
                    height={102}
                  />
                </Link>
              </Box>
              <Typography sx={{ textAlign: "justify" }}>
                The goal of this{" "}
                <Typography component="span" sx={{ color: "text.secondary" }}>
                  {" "}
                  &quot;10 Minute School&quot;{" "}
                </Typography>
                web site is to provide a list of 10 Minute School of different
                countries, states, and regions according to the type and taking
                into account the relevant time zone.
              </Typography>
              <Typography sx={{ color: "text.secondary", mt: 1 }}>
                Happy 10 Minute School!
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 4 }} sx={{ my: 2 }}>
              <Typography variant="h5" gutterBottom>
                Useful Links
              </Typography>
              <List
                sx={{
                  "li a": {
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    columnGap: 1,
                  },
                }}
              >
                <ListItem disablePadding>
                  <Link href="" target="_blank">
                    <MdArrowForwardIos />
                    <ListItemText primary="Holiday (Wikipedia)" />
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link href="">
                    <MdArrowForwardIos />
                    <ListItemText primary="Definitions of" />
                  </Link>
                </ListItem>
              </List>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 4 }} sx={{ my: 2 }}>
              <Typography variant="h5" gutterBottom>
                Using The Site
              </Typography>
              <List
                sx={{
                  "li a": {
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    columnGap: 1,
                  },
                }}
              >
                <ListItem disablePadding>
                  <Link href="/about-us">
                    <MdArrowForwardIos />
                    <ListItemText primary="About Us" />
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link href="/terms-and-conditions">
                    <MdArrowForwardIos />
                    <ListItemText primary="Terms and Conditions" />
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link href="/privacy-policy">
                    <MdArrowForwardIos />
                    <ListItemText primary="Privacy Policy" />
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link href="/contact-us">
                    {" "}
                    <MdArrowForwardIos />
                    <ListItemText primary="Contact Us" />
                  </Link>
                </ListItem>
              </List>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
      <Box sx={{ py: 2, bgcolor: "secondary.100" }}>
        <Container maxWidth="lg">
          <Grid2 container>
            <Grid2 size={{ xs: 12 }}>
              <Typography sx={{ textAlign: "center", color: "text.secondary" }}>
                Copyright © {dayjs().year()} @easy | All rights reserved.
              </Typography>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </Box>
  );
};
export default Footer;
