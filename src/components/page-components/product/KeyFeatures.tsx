"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Sticky from "react-sticky-el";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(customParseFormat);
dayjs.extend(localizedFormat);
type Props = {
  checklist: { icon: string; text: string }[];
  variantsData: {
    data: {
      items: {
        name: string;
        meta: { key: string; values: { text: string; end_at: string }[] }[];
      }[];
    };
  };
};

const KeyFeaturesCard = ({ checklist, variantsData }: Props) => {
  const { items } = variantsData.data;
  const { name, meta } = items[0];
  const timer = meta.find((item) => item.key == "timer");
  return (
    <Card variant="outlined" sx={{ mt: 9 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2 }}>
          {name}
        </Typography>
        <Button variant="contained" fullWidth>
          Enroll
        </Button>
        <Typography variant="h6" sx={{ color: "warning.main", my: 2 }}>
          {timer?.values[0].text} {dayjs(timer?.values[0].end_at).format("LL")}
        </Typography>
        <Typography variant="h5">এই কোর্সে যা থাকছে</Typography>
        <List>
          {checklist.map(({ icon, text }, index) => (
            <ListItem disablePadding key={index} sx={{ columnGap: 1 }}>
              <Box sx={{ maxWidth: "20px" }}>
                <Image
                  src={icon}
                  alt="icon"
                  width="0"
                  height="0"
                  style={{ width: "20px", height: "auto" }}
                />
              </Box>
              <ListItemText primary={`${text}`} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};
const KeyFeatures = ({ checklist, variantsData }: Props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      {matches ? (
        <Sticky
          boundaryElement=".product"
          hideOnBoundaryHit={false}
          topOffset={-72}
        >
          <KeyFeaturesCard {...{ checklist, variantsData }} />
        </Sticky>
      ) : (
        <KeyFeaturesCard {...{ checklist, variantsData }} />
      )}
    </>
  );
};

export default KeyFeatures;
