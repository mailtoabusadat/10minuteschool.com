"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import parse from "html-react-parser";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { FaAngleDown } from "react-icons/fa6";

type Props = {
  name?: string;
  values?: {
    id?: string;
    question?: string;
    answer?: string;
  }[];
};
const FAQ = ({ name, values }: Props) => {
  const locale = useLocale();
  const t = useTranslations("IELTSLiveBatch");
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
        {locale != "bn" ? t("faq.title") : name}
      </Typography>
      <Card variant="outlined">
        <CardContent>
          {values?.map(({ id, question, answer }, index) => (
            <Accordion
              key={index}
              expanded={expanded === `${index}`}
              onChange={handleChange(`${index}`)}
            >
              <AccordionSummary
                expandIcon={<FaAngleDown />}
                aria-controls="panel1bh-content"
                id={id}
              >
                <Typography>{question}</Typography>
              </AccordionSummary>
              <AccordionDetails>{parse(answer as string)}</AccordionDetails>
            </Accordion>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default FAQ;
