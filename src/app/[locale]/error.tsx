"use client"; // Error boundaries must be Client Components

import { Button, Container, Grid2, Typography } from "@mui/material";
import { Metadata } from "next";
import { useEffect } from "react";
import { IoReloadSharp } from "react-icons/io5";

export const metadata: Metadata = {
  title: "Error",
};

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Container maxWidth="lg">
      <Grid2
        container
        columnSpacing={{ xs: 2, md: 3, lg: 4 }}
        sx={{ textAlign: "center" }}
      >
        <Grid2 size={{ xs: 12 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{ pt: 4, mb: 3 }}
            color="warning"
          >
            Something went wrong!
          </Typography>
          <Button
            variant="contained"
            startIcon={<IoReloadSharp />}
            color="info"
            onClick={() => reset()}
          >
            Try again
          </Button>
        </Grid2>
      </Grid2>
    </Container>
  );
};
export default ErrorPage;
