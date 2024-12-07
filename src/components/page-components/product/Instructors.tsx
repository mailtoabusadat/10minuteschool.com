"use client";
import { Box, Card, CardContent, Grid2, Typography } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

type Props = {
  name?: string;
  values?: {
    image?: string;
    name?: string;
  }[];
};
const Instructors = ({ name, values }: Props) => {
  const locale = useLocale();
  const t = useTranslations("IELTSLiveBatch");
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
        {locale != "bn" ? t("instructors.title") : name}
      </Typography>
      <Card variant="outlined">
        <CardContent>
          <Grid2 container columnSpacing={{ xs: 2, md: 3, lg: 4 }}>
            {values?.map(({ image, name }, index) => (
              <Grid2
                key={index}
                size={{ xs: 12, md: 6 }}
                sx={{ display: "flex", columnGap: 1, my: 1.5 }}
              >
                <Box
                  sx={{
                    maxWidth: "73px",
                    img: {
                      borderRadius: 1,
                    },
                  }}
                >
                  <Image
                    src={image as string}
                    alt="logo"
                    width={73}
                    height={73}
                  />
                </Box>
                <Box>
                  <Typography variant="h6">{name}</Typography>
                  <Typography>Band Score: 8.0</Typography>
                  <Typography>6+ Years Exp</Typography>
                </Box>
              </Grid2>
            ))}
          </Grid2>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Instructors;
