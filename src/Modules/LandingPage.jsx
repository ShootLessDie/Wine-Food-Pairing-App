import React from "react";
import { Container } from "@mui/system";
import Box from "@mui/material/Box";
import "./LandingPage.css";
import Grid from "@mui/material/Unstable_Grid2";
import image from "../assets/icons/wineGlassBottle.png";
import wineStainImage from "../assets/images/wine-stain-5.png";
import wineStainImage2 from "../assets/images/wine-stain-8.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
//import clinkingGlasses from "../assets/animated-icons/clinking-glasses.gif";

const LandingPage = () => {
  return (
    <Container maxWidth="1" sx={{ width: "100%" }} className="containerClass">
      <img
        className="wineStain"
        src={wineStainImage}
        alt=""
        height="400px"
        width="400px"
      />
      <img
        className="wineStain2"
        src={wineStainImage2}
        alt=""
        height="400px"
        width="400px"
      />

      <Grid container spacing={2} sx={{ height: "100vh", margin: 0 }}>
        <Grid xs={8}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              flexDirection: "column",
            }}
          >
            <h1 class="title">
              <span class="title-word title-word-1">The </span>
              <div class="title-word-container">
                <span class="title-word title-word-2">Wine </span>
                <span class="title-word title-word-3"> & </span>
                <span class="title-word title-word-4"> Food </span>
              </div>
              <span class="title-word title-word-5">Pairing </span>
              <span class="title-word title-word-6">App </span>
            </h1>
            <h2 class="line-1 anim-typewriter" id="landingH2">
              Your personal Sommelier, at your service...
            </h2>
            <Link to="/sommelier" style={{ textDecoration: 'none' }}>
            <Button variant="contained" size="large" color="error" sx={{
              background: "linear-gradient(to right, maroon, red, purple)",
              color: "white",
              typography: "subtitle1",
              fontFamily: "poor richard",
              fontWeight: "bold",
              fontSize: "1.5rem",
              }} >
              Show <br></br>Recommendations
              <img
             //src={clinkingGlasses}
             alt=""
             style={{ width: "100px", marginLeft: "10px" }}
           />
            </Button>
            </Link>
          </Box>
        </Grid>
        <Grid xs={4}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              flexDirection: "column",
            }}
          >
            <img src={image} alt="" className="wineImage" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;
