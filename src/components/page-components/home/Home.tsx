"use client";
import { Container, Grid2 } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Grid2
        container
        columnSpacing={{ xs: 2, md: 3, lg: 4 }}
        rowSpacing={2}
        sx={{
          ".MuiPaper-root": {
            height: { md: 225 },
          },
        }}
      >
        <Grid2 size={{ xs: 12, md: 6, lg: 4 }}></Grid2>
        <Grid2 size={{ xs: 12, md: 6, lg: 4 }}></Grid2>
        <Grid2
          size={{ lg: 4 }}
          sx={{ display: { xs: "none", lg: "block" } }}
        ></Grid2>
      </Grid2>
    </Container>
  );
};
export default Home;
