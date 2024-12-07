import {
  Box,
  Container,
  Grid2,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useMessages, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdArrowForwardIos, MdFacebook } from "react-icons/md";
import { RiInstagramLine } from "react-icons/ri";
type Footer = {
  col2: {
    items: {
      label: string;
      url: string;
    }[];
  };
};
const Footer = () => {
  const t = useTranslations("Footer");
  const messages = useMessages();
  const footer: Footer = messages.Footer as unknown as Footer;

  return (
    <Box sx={{ mt: 8 }}>
      <Box sx={{ py: 3 }}>
        <Container maxWidth="lg">
          <Grid2 container columnSpacing={{ xs: 2, md: 3, lg: 4 }}>
            <Grid2 size={{ xs: 12, sm: 4 }} sx={{ my: 2 }}>
              <Box sx={{ maxWidth: "150px", mb: 2 }}>
                <Link href="/">
                  <Image
                    src="/images/logo-horizontal.png"
                    alt="logo"
                    width={3263}
                    height={911}
                  />
                </Link>
              </Box>
              <Typography sx={{ color: "text.secondary", mt: 1 }}>
                {t("col1.title")}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
                <Box sx={{ maxWidth: "156px" }}>
                  <Link href="/">
                    <Image
                      src="/images/footer/google-play-icon.jpg"
                      alt="logo"
                      width={156}
                      height={49}
                    />
                  </Link>
                </Box>
                <Box sx={{ maxWidth: "156px" }}>
                  <Link href="/">
                    <Image
                      src="/images/footer/ios-store-icon.jpg"
                      alt="logo"
                      width={156}
                      height={49}
                    />
                  </Link>
                </Box>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 4 }} sx={{ my: 2 }}>
              <Grid2 container columnSpacing={{ xs: 2, md: 3, lg: 4 }}>
                <Grid2 size={{ xs: 12, sm: 6 }}>
                  <Typography variant="h5" gutterBottom>
                    {t("col2.title")}
                  </Typography>
                  <List
                    sx={{
                      li: {
                        my: 1,
                        a: {
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          columnGap: 1,
                        },
                      },
                    }}
                  >
                    {footer?.col2?.items.map((item, index) => (
                      <div key={index}>{item.label}</div>
                    ))}

                    <ListItem disablePadding>
                      <Link href="" target="_blank">
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
                <Grid2 size={{ xs: 12, sm: 6 }}>
                  <Typography variant="h5" gutterBottom>
                    {t("col3.title")}
                  </Typography>
                  <List
                    sx={{
                      li: {
                        my: 1,
                        a: {
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                          columnGap: 1,
                        },
                      },
                    }}
                  >
                    <ListItem disablePadding>
                      <Link href="" target="_blank">
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
              </Grid2>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 4 }} sx={{ my: 2 }}>
              <Typography variant="h5" gutterBottom>
                {t("col4.title")}
              </Typography>
              <List
                sx={{
                  li: {
                    my: 1,
                    a: {
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      columnGap: 1,
                    },
                  },
                }}
              >
                <ListItem disablePadding>
                  <Link href="/">{t("col4.callUs.label")}</Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link href="/">{t("col4.whatsapp.label")}</Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link href="/">{t("col4.outsideBD.label")}</Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link href="/">{t("col4.emailUs.label")}</Link>
                </ListItem>
              </List>
              <List
                sx={{
                  mt: 3,
                  display: "flex",
                  flexWrap: "wrap",
                  columnGap: 3,
                  rowGap: 1,
                  li: {
                    width: "30px",
                    height: "30px",
                    textAlign: "center",
                    bgcolor: "secondary.main",
                    color: "white.main",
                    borderRadius: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                    a: {
                      lineHeight: 1,
                    },
                  },
                }}
              >
                <ListItem disablePadding>
                  <Link href="/">
                    <MdFacebook />
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link href="/">
                    <RiInstagramLine />
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link href="/">
                    <FaLinkedinIn />
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link href="/">
                    <FaYoutube />
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
                {t("copyright")}
              </Typography>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </Box>
  );
};
export default Footer;
