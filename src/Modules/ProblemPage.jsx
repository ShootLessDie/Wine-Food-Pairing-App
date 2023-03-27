import { Box, Container, Typography } from "@mui/material";
import React from "react";
import "./ProblemPage.css";

const ProblemPage = () => {
  return (
    <Container maxWidth="lg" className="containerClass" sx={{
      boxShadow: "0rem 0rem 2rem 1rem rgb(0,0,0, 0.4)",
      border: "1px solid rgb(187 31 59 / 50%)",
      margin: "3rem auto",
      borderRadius: "1rem"
    }}>
      <Box paddingY={5} overflow="hidden">
        <Typography marginY={4} variant="h1" className="gradient-headline">
          The Wine & Food Pairing App
        </Typography>
        <Typography className="problem-page-intruduction" variant="p">
          <Typography
            marginY={3}
            textAlign="center"
            className="problem-page-subtitle"
            variant="h2"
          >
            From novice to connoisseur…
          </Typography>
          <Typography textAlign="center" variant="h4" >
            This app is designed to be used by all as the perfect accompaniment
            to any truly great dining experience. Simply enter either the meal
            or wine that you wish to pair to generate a list of suitable
            culinary companions. Hosting the perfect dinner party has never been
            easier!
          </Typography>
        </Typography>
      </Box>
    </Container>
  );
};

export default ProblemPage;
