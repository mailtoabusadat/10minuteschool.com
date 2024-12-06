import { Box, Typography } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loading",
};
const LoadingPage = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        bgcolor: "white.light",
        width: "100vw",
        height: "100vh",
        zIndex: "1251",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          ".loading-container,.loading": {
            height: "120px",
            position: "relative",
            width: "120px",
            borderRadius: "100%",
          },
        }}
      >
        <Box className="loading-container" sx={{ margin: "auto" }}>
          <Box className="loading"></Box>
          <Box id="loading-text" sx={{ color: "warning.main" }}>
            loading...
          </Box>
        </Box>
        <Typography
          variant="h5"
          component="span"
          sx={{ color: "primary.main", textAlign: "center", mt: 1.5 }}
        >
          10minuteschool.com
        </Typography>
      </Box>
    </Box>
  );
};
export default LoadingPage;
