import { Box, Link, Typography } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import parse from "html-react-parser";

type Props = {
  name?: string;
  values?: {
    id?: string;
    question?: string;
    answer?: string;
    download_link?: string;
    html?: string;
  }[];
};
const Routine = ({ name, values }: Props) => {
  const { download_link, html } = values?.[0] || {};
  const locale = useLocale();
  const t = useTranslations("IELTSLiveBatch");
  return (
    <Box sx={{ mt: 5 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          {locale != "bn" ? t("routine.title") : name}
        </Typography>
        <Link href={download_link} target="_blank">
          ডাউনলোড রুটিন
        </Link>
      </Box>
      <Box
        sx={{
          td: {
            border: "1px solid",
          },
        }}
      >
        {parse(html as string)}
      </Box>
    </Box>
  );
};

export default Routine;
