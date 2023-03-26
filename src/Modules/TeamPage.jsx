import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import "./TeamPage.css";
import blago from "../assets/images/blago.jpg";
import gellert from "../assets/images/gellert.jpg";
import bronwen from "../assets/images/bronwen.jpg";
import github from "../assets/images/github-logo.png";
import linkedin from "../assets/images/linkedin-logo.png";

const TeamPage = () => {

  // create hover function changing profile picture to info text
  const handleHover = (event) => {
    event.target.style.opacity = 0;
  };

  const handleMouseOut = (event) => {
    event.target.style.opacity = 1;
  };


  return (
    <Container
      maxWidth="1"
      sx={{ height: "100vh", width: "100%" }}
      className="containerClass"
    >
      <br />
      <br />
      <h1 id="gradient-text">Meet the Team</h1>
      <br />
      <br />
      <br />
      <br />

      <Grid container spacing={2} sx={{ margin: 0 }}>
        <Grid xl={4}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              //   height: "100%",
              flexDirection: "column",
            }}
          >
            <div class="logo-holder">
            <img
              id="blagoPicture"
              className="profilePictures"
              src={blago}
              alt=""
              onMouseOver={handleHover}
              onMouseOut={handleMouseOut}
            />
            <h2>Blago Dishkov</h2>
            <h3 className="textBlago">
              <br></br><br></br>Proffesion: Viticulturist

             <br></br><br></br> Hobby: Wine, Football, Fishing

              <br></br><br></br>Lately intrested in Software Engineering and Web Development
            </h3>
            </div>
          </Box>
        </Grid>
        <Grid xl={4}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              //   height: "100%",
              flexDirection: "column",
            }}
          >
              <div class="logo-holder">
            <img
              id="gellertPicture"
              className="profilePictures"
              src={gellert}
              alt=""
           
            />
            <h2>Gellert Eke</h2>
            <h3 className="textGellert">
              <br></br><br></br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h3>
            </div>
          </Box>
        </Grid>
        <Grid xl={4}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              //   height: "100%",
              flexDirection: "column",
            }}
          >
             <div class="logo-holder">
            <img
            id="bronwenPicture"
              className="profilePictures"
              src={bronwen}
              alt=""
    
            />
             <h2>Bronwen Jenner</h2>
            <h3 className="textBronwen">
              <br></br><br></br>
              Front-End Web Development Student 
              <br></br>
              <br></br>Studying with EdX Bootcamp

             <br></br><br></br>  <img src={github} alt="GitHub" /> Github: <a href="https://github.com/Bronwen27">Bronwen27</a>

              <br></br><br></br>  <img src={linkedin} alt="GitHub" /> LinkedIn: <a href="https://www.linkedin.com/in/bronwen-jenner-a376a5195/ ">Bronwen-Jenner</a>
            </h3>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TeamPage;
