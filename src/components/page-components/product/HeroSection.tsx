"use client";
import { Box, Grid2, Typography } from "@mui/material";
import parse from "html-react-parser";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Countdown from "react-countdown";
import { FaCalendarAlt } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";
import { GoClockFill } from "react-icons/go";
import { MdAirlineSeatReclineNormal } from "react-icons/md";

type Props = {
  title: string;
  description: string;
};

type RendererProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
};
const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: RendererProps) => {
  if (completed) {
    return "You are good to go!";
  } else {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          ".MuiBox-root": {
            color: "white.light",
            ".MuiTypography-h4": {
              width: "65px",
              height: "70px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "secondary.dark",
              color: "white.light",
              borderRadius: "10px",
              borderWidth: "3px",
              borderStyle: "solid",
              borderColor: "white.main",
            },
            ".MuiTypography-root": {
              mt: 0.5,
            },
          },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4">{days}</Typography>
          <Typography>Days</Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4">{hours}</Typography>
          <Typography>Hours</Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4">{minutes}</Typography>
          <Typography>Minutes</Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4">{seconds}</Typography>
          <Typography>Seconds</Typography>
        </Box>
      </Box>
    );
  }
};
const HeroSection = ({ title, description }: Props) => {
  const locale = useLocale();
  const t = useTranslations("IELTSLiveBatch");
  return (
    <Box
      sx={{
        py: 8,
        position: "relative",
        "&:after": {
          content: "''",
          position: "absolute",
          top: 0,
          left: "0",
          width: "500%",
          height: "100%",
          transform: "translateX(-50%)",
          backgroundImage: "url(/images/product/hero-bg.jpeg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ maxWidth: "105px", mb: 2 }}>
          <Image
            src="/images/live_icon.jpg"
            alt="logo"
            width={268}
            height={104}
          />
        </Box>
        <Typography variant="h2" sx={{ color: "white.light" }}>
          {title}
        </Typography>
        <Box sx={{ color: "white.main" }}>
          {locale != "bn" ? t("description") : parse(description)}
        </Box>
        <Grid2
          container
          columnSpacing={{ xs: 2, md: 3, lg: 4 }}
          sx={{
            ".item": {
              my: 1,
              display: "flex",
              alignItems: "center",
              columnGap: 1.5,
              svg: { fontSize: "20px" },
              "*": {
                color: "white.light",
              },
            },
          }}
        >
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box className="item">
              <FaCalendarAlt />
              <Typography variant="h6">{t("info.courseDuration")}</Typography>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box className="item">
              <GoClockFill />
              <Typography variant="h6"> {t("info.classTime")}</Typography>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box className="item">
              <GiSandsOfTime />
              <Typography variant="h6"> {t("info.enrollment")}</Typography>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box className="item">
              <MdAirlineSeatReclineNormal />{" "}
              <Typography variant="h6"> {t("info.seat")}</Typography>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box className="item">
              <MdAirlineSeatReclineNormal />
              <Typography variant="h6"> {t("info.students")}</Typography>
            </Box>
          </Grid2>
        </Grid2>
        <Box sx={{ mt: 3 }}>
          <Typography sx={{ mb: 1 }}>{t("countDown.title")}</Typography>
          <Countdown
            date={Date.now() + 30 * 24 * 60 * 60 * 1000}
            renderer={renderer}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
