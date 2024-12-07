import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";

type Props = {
  name?: string;
};
const FreeItems = ({ name }: Props) => {
  const locale = useLocale();
  const t = useTranslations("IELTSLiveBatch");
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
        {locale != "bn" ? t("freeItems.title") : name}
      </Typography>
      <Box
        sx={{ position: "relative", p: 5, borderRadius: 4, overflow: "hidden" }}
      >
        <Image
          src="/images/product/free-items-bg.jpg"
          alt="free-book"
          fill
          sizes="100"
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            columnGap: 2,
            zIndex: 1,
            color: "white.light",
            svg: {
              flexShrink: 0,
            },
            ".MuiListItem-root": {
              alignItems: "baseline",
              columnGap: 0.5,
            },
          }}
        >
          <List>
            <ListItem disablePadding>
              <GoDotFill />
              <ListItemText primary="360 পৃষ্ঠা" />
            </ListItem>
            <ListItem disablePadding>
              <GoDotFill />
              <ListItemText primary="প্রিমিয়াম হার্ডকপি" />
            </ListItem>
            <ListItem disablePadding>
              <GoDotFill />
              <ListItemText primary="ফ্রি ডেলিভারি" />
            </ListItem>
            <ListItem disablePadding>
              <GoDotFill />
              <ListItemText primary="৪ কর্মদিবসের মধ্যে সারাদেশে ডেলিভারি" />
            </ListItem>
          </List>
          <Box sx={{ maxWidth: "105px", position: "relative" }}>
            <Image
              src="/images/product/free-book-1.png"
              alt="free-book"
              width={879}
              height={943}
            />
          </Box>
        </Box>
        <Divider
          sx={{
            my: 1,
            border: "1px dashed",
            borderColor: "white.dark",
            position: "relative",
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            columnGap: 2,
            zIndex: 1,
            color: "white.light",
            svg: {
              mt: 1,
              flexShrink: 0,
            },
            ".MuiListItem-root": {
              alignItems: "baseline",
              columnGap: 0.5,
            },
          }}
        >
          <List>
            <ListItem disablePadding>
              <GoDotFill />
              <ListItemText primary="৫৭টি Videos" />
            </ListItem>
            <ListItem disablePadding>
              <GoDotFill />
              <ListItemText primary="IELTS প্রস্তুতির জন্য Basic to Advanced স্তরের বিভিন্ন Grammar এর গুরুত্বপূর্ণ টপিকসমূহ" />
            </ListItem>
            <ListItem disablePadding>
              <GoDotFill />
              <ListItemText primary="অভিজ্ঞ শিক্ষকমণ্ডলী" />
            </ListItem>
          </List>
          <Box
            sx={{
              maxWidth: "105px",
              position: "relative",
            }}
          >
            <Image
              src="/images/product/free-book-2.jpg"
              alt="free-book"
              width={1080}
              height={1080}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FreeItems;
