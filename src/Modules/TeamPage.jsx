import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import "./TeamPage.css";
import blago from "../assets/images/blago.jpg";
import gellert from "../assets/images/gellert.jpg";
import bronwen from "../assets/images/bronwen.jpg";
import github from "../assets/images/github-logo.png";
import linkedin from "../assets/images/linkedin-logo.png";
import team from "../team.json";
import TeamMember from "./components/TeamMember";

const TeamPage = () => {
  return (
    <Box className="containerClass" overflow="auto">
      <Typography marginY={5} variant="h1" className="gradient-headline">
        Meet the Team
      </Typography>
      <Grid container justifyContent="space-around">
        {team.team.map((member, index) => (
          <Grid item xs={12} md={3}>
            <Box>
              <TeamMember key={index} member={member} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const TeamPageOld = () => {
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
                <br></br>
                <br></br>Proffesion: Viticulturist
              </h3>
              <h2 className="text">Blago Dishkov</h2>
              <h3 className="text">
                Proffesion: Viticulturist
                <br></br>
                <br></br> Hobby: Wine, Football, Fishing
                <br></br>
                <br></br>Lately intrested in Software Engineering and Web
                Development
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
                <br></br>
                <br></br>
              </h3>
              <h2 className="text">Gellert Eke</h2>
              <h3 className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
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
                <br></br>
                <br></br>
                Front-End Web Development Student
                <br></br>
                <br></br>Studying with EdX Bootcamp
              </h3>
              <br></br>
              <br></br> <img src={github} alt="GitHub" /> Github:{" "}
              <a href="https://github.com/Bronwen27">Bronwen27</a>
              <br></br>
              <br></br> <img src={linkedin} alt="GitHub" /> LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/bronwen-jenner-a376a5195/ ">
                Bronwen-Jenner
              </a>
              <h2 className="text">Bronwen Jenner</h2>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TeamPage;
