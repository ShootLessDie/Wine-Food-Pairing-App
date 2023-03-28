import React, { useCallback } from "react";
import { Container } from "@mui/system";
import { Grid, Typography, ButtonBase } from "@mui/material";
import "./LandingPage.css";
import clinkingGlasses from "../assets/animated-icons/clinking-glasses.gif";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const goToAppPage = useCallback(() => {
    navigate("/sommelier");
  }, [navigate]);

  return (
    <Container
      maxWidth="1"
      sx={{
        minHeight: "100vh",
        overflow: "hidden",
      }}
      className="containerClass landing-container"
    >
      <Grid
        container
        justifyContent="space-between"
        boxSizing="border-box"
        paddingY={10}
        direction="column"
        height="100vh"
      >
        <Grid item>
          <Typography
            variant="title"
            textAlign="center"
            color="white"
            overflow="hidden"
            display="block"
          >
            The Wine & Food Pairing App
          </Typography>
        </Grid>
        <Grid item container justifyContent="center">
          <Grid item>
            <ButtonBase
              sx={{
                border: "2px solid white",
                borderRadius: "1rem",
                padding: "1rem",
                color: "white",
              }}
              onClick={goToAppPage}
            >
              <Typography variant="accentButton">
                Show Recommendations
              </Typography>
              <img
                src={clinkingGlasses}
                alt=""
                style={{ width: "3rem", marginLeft: "1rem" }}
              />
            </ButtonBase>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;
