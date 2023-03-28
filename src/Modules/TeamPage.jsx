import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./TeamPage.css";
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
          <Grid key={index} item xs={12} md={3}>
            <Box>
              <TeamMember member={member} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamPage;
