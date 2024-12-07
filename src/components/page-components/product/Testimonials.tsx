"use client";
import { Box, Skeleton, Typography } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
type Props = {
  name?: string;
  values?: {
    image?: string;
    name?: string;
    profile_image?: string;
    testimonial?: string;
    thumb?: string;
    video_url?: string;
  }[];
};
const Testimonials = ({ name, values }: Props) => {
  const locale = useLocale();
  const t = useTranslations("IELTSLiveBatch");
  const [isClient, setIsClient] = useState(false);
  const [isPlaying, setIsPlaying] = useState<number | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const handleThumbnailClick = (index: number) => {
    setIsPlaying(index);
  };
  return (
    <Box
      sx={{
        mt: 5,
        ".swiper-button-prev,.swiper-button-next": {
          width: "40px !important",
          height: "40px !important",
          fontSize: "20px !important",
          bgcolor: "secondary.light",
          borderRadius: "50%",
          "&:after": { fontSize: "inherit !important", color: "white.light" },
        },
      }}
    >
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
        {locale != "bn" ? t("testimonials.title") : name}
      </Typography>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        {values?.map(
          ({ name, profile_image, testimonial, thumb, video_url }, index) => (
            <SwiperSlide key={index}>
              {isClient ? (
                <Box>
                  <Box
                    onClick={() => handleThumbnailClick(index)}
                    sx={{ cursor: "pointer", height: "200px" }}
                  >
                    <ReactPlayer
                      playing={isPlaying == index ? true : false}
                      url={`https://www.youtube.com/embed/${video_url}`}
                      light={thumb}
                      width="100%"
                      height="100%"
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: 1,
                      mt: 2,
                    }}
                  >
                    <Box
                      sx={{
                        img: {
                          width: "40px !important",
                          height: "40px !important",
                          borderRadius: "50%",
                        },
                      }}
                    >
                      <Image
                        src={profile_image as string}
                        alt="profile-image"
                        width={50}
                        height={50}
                      />
                    </Box>
                    <Box>
                      <Typography>{name}</Typography>
                      <Typography>{testimonial}</Typography>
                    </Box>
                  </Box>
                </Box>
              ) : (
                <Skeleton width="100%" height="320px">
                  <Typography>.</Typography>
                </Skeleton>
              )}
            </SwiperSlide>
          )
        )}
      </Swiper>
    </Box>
  );
};

export default Testimonials;
