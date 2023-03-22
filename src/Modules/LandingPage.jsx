import React from "react";
import { Container } from "@mui/system";
import Box from "@mui/material/Box";
import "./LandingPage.css";
import Grid from "@mui/material/Unstable_Grid2";

const LandingPage = () => {
  return (
    <Container
      maxWidth="1"
      sx={{ bgcolor: "#cfe8fc", height: "100vh", width: "100%" }}
    >
      <Grid container spacing={2} sx={{margin: 0}}>
        <Grid xs={8}>
          <div>Bla</div>
        </Grid>
        <Grid xs={4}>
          <div>Bla</div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;
