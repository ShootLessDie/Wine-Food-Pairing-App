import { Box, Container } from "@mui/material";
import React from "react";

const ProblemPage = () => {
  return (
    <Container
      maxWidth="1"
      sx={{ height: "80vh", width: "80%", borderRadius: "10px", boxShadow: 2 }}
      className="containerClass"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          flexDirection: "column",
        }}
      >
        <h1 id="gradient-text">The Wine & Food Pairing App</h1>
        
        <h2 style={{color: "#f6eee8"}}>
            <span class="from">From novice to connoisseur… </span>this app is designed to be used by all as the perfect accompaniment to any truly great dining experience. <br></br>
            <br></br>Simply enter either the meal or wine that you wish to pair to generate a list of suitable culinary companions. <br></br>
            <br></br>Hosting the perfect dinner party has never been easier!
            </h2>
      </Box>
    </Container>
  );
};

export default ProblemPage;
