import React from "react";
import { Container } from "@mui/system";
import Box from "@mui/material/Box";
import "./LandingPage.css";
import Grid from "@mui/material/Unstable_Grid2";
import image from "../assets/icons/wineGlassBottle.png";
import wineStainImage from "../assets/images/wine-stain-5.png";
import wineStainImage2 from "../assets/images/wine-stain-8.png";

const LandingPage = () => {
  console.log(wineStainImage);
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
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h2>
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
