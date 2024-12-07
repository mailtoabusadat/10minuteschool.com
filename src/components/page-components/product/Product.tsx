import { Box, Container, Grid2 } from "@mui/material";
import FAQ from "./FAQ";
import FreeItems from "./FreeItems";
import HeroSection from "./HeroSection";
import Instructors from "./Instructors";
import KeyFeatures from "./KeyFeatures";
import Routine from "./Routine";
import Testimonials from "./Testimonials";
import React from "react";

type Props = {
  productsData: {
    data: {
      title: string;
      description: string;
      checklist: { icon: string; text: string }[];
      sections: {
        type: string;
        name: string;
        values: {
          image?: string;
          name?: string;
          id?: string;
          question?: string;
          answer?: string;
          download_link?: string;
          html?: string;
          profile_image?: string;
          testimonial?: string;
          thumb?: string;
          video_url?: string;
        }[];
      }[];
    };
  };
  variantsData: {
    data: {
      items: {
        name: string;
        meta: { key: string; values: { text: string; end_at: string }[] }[];
      }[];
    };
  };
};
const Product = ({ productsData, variantsData }: Props) => {
  const { title, description, checklist, sections } = productsData.data;
  const instructors = sections.find((section) => section.type == "instructors");
  const routine = sections.find((section) => section.type == "routine");
  const freeItems = sections.find((section) => section.type == "free_items");
  const testimonials = sections.find(
    (section) => section.type == "testimonials"
  );
  const faq = sections.find((section) => section.type == "faq");
  const heroSectionProps = {
    title,
    description,
  };
  const keyFeaturesProps = {
    checklist,
    variantsData,
  };
  return (
    <Box className="product">
      <Container maxWidth="lg">
        <Grid2
          container
          columnSpacing={{ xs: 2, md: 3, lg: 4 }}
          sx={{ overflow: "visible" }}
        >
          <Grid2 size={{ xs: 12, md: 8 }}>
            <HeroSection {...heroSectionProps} />
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <KeyFeatures {...keyFeaturesProps} />
            </Box>
            <Instructors {...instructors} />
            <Routine {...routine} />
            <FreeItems {...freeItems} />
            <Testimonials {...testimonials} />
            <FAQ {...faq} />
          </Grid2>
          <Grid2
            size={{ xs: 12, md: 4 }}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <KeyFeatures {...keyFeaturesProps} />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Product;
