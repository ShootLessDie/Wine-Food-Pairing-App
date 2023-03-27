import { useEffect, useState } from "react";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import "./TeamMember.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const LinkIcon = ({ name, ...props }) => {
  const icons = {
    github: GitHubIcon,
    linkedin: LinkedInIcon,
  };
  const Component = icons[name];

  if (!Component) return false;

  return <Component {...props}></Component>;
};

const TeamMember = ({ member }) => {
  const [image, setImage] = useState();
  const { name, profession, hobby, description, picture_link, links } = member;
  const theme = useTheme();
  const matches_md = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const fetchProfilePicture = async () => {
      try {
        const response = await import(`../../assets/images/${picture_link}`);
        setImage(response.default);
      } catch (e) {
        console.error(e);
        setImage("");
      }
    };

    fetchProfilePicture();
  }, [picture_link]);

  return (
    <Grid
      container
      paddingY={4}
      paddingX={2}
      boxSizing="border-box"
      direction="column"
    >
      <div
        style={{
          backgroundImage: `url(${image})`,
          ...(matches_md ? { border: "none", borderRadius: "0" } : {}),
        }}
        className="profile-picture"
      ></div>
      <Typography
        variant="h3"
        marginY={4}
        textAlign="center"
        className="team-member-name"
      >
        {name}
      </Typography>
      {links && (
        <Grid
          container
          columnGap={2}
          className="team-member-social-links"
          justifyContent="center"
        >
          {Object.entries(links)?.map((link, index) => (
            <a key={index} href={link[1]}>
              <LinkIcon
                className="team-member-social-link-icon"
                name={link[0]}
              ></LinkIcon>
            </a>
          ))}
        </Grid>
      )}
      {profession && <h4 className="team-member-profession">{profession}</h4>}
      {hobby && <span className="team-member-hobby">Hobbies: {hobby}</span>}
      {description && <p className="team-member-description">{description}</p>}
    </Grid>
  );
};

export default TeamMember;
