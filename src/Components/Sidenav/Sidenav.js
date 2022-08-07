import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import { Link } from "react-scroll";
import { styled } from "@mui/material/styles";
import DescriptionIcon from '@mui/icons-material/Description';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import PsychologyIcon from '@mui/icons-material/Psychology';
import DevicesIcon from '@mui/icons-material/Devices';
import Fade from 'react-reveal/Fade';
import "./Sidenav.css";

const Sidenav = ({ Toggle, SetToggle }) => {
  const NavButton = styled(Typography)({
    color: "#fff",
    fontFamily: "Maven pro",
    fontSize: "1rem",
    fontWeight: 600,
    marginLeft: "10px",
    "&:hover": {
      background: "none",
      color: "#cd5ff8",
    },
  });

  const Typo = styled(Typography)({
    display: "flex",
    justifyContent:"center",
    alignItems: "center",
    flexWrap: "nowrap",
    color: "#cd5ff8",
    opacity: "0.8",
    cursor: "pointer",
  });
  return (
    <Box className={Toggle ? "menuDiv" : "menuDiv out"}>
      <Box className={Toggle ? "menu" : "menu out"}>
        <Stack
          direction={"column"}
          justifyContent={ "flex-start"}
          alignItems={"flex-start"}
          textAlign={"left"}
          spacing={6}
          padding={{ xxs: "5rem 2rem", xs: "5rem 3rem", sm: "5rem 5rem"}}
        >
          <Typo className="sidebarIcons">
            <DescriptionIcon />
            <Fade right duration={2000} distance={"20px"}>
              <span>
                <Link to="about" spy={true} smooth={true}>
                  <NavButton variant="text" onClick={() => SetToggle(!Toggle)}>About</NavButton>
                </Link>
              </span>
            </Fade>
          </Typo>

          <Typo className="sidebarIcons">
            <PsychologyIcon />
            <Fade right duration={2000} distance={"20px"}>
              <span>
                <Link to="skills" spy={true} smooth={true}>
                  <NavButton variant="text" onClick={() => SetToggle(!Toggle)}>Skills</NavButton>
                </Link>
              </span>
            </Fade>
          </Typo>

          <Typo className="sidebarIcons">
            <DevicesIcon />
            <Fade right duration={2000} distance={"20px"}>
              <span>
                <Link to="projects" spy={true} smooth={true}>
                  <NavButton variant="text" onClick={() => SetToggle(!Toggle)}>Projects</NavButton>
                </Link>
              </span>
            </Fade>
          </Typo>

          <Typo className="sidebarIcons">
            <SchoolIcon />
            <Fade right duration={2000} distance={"20px"}>
              <span>
                <Link to="education" spy={true} smooth={true}>
                  <NavButton variant="text" onClick={() => SetToggle(!Toggle)}>Education</NavButton>
                </Link>
              </span>
            </Fade>
          </Typo>

          <Typo className="sidebarIcons">
            <EmailIcon />
            <Fade right duration={2000} distance={"20px"}>
              <span>
                <Link to="contact" spy={true} smooth={true}>
                  <NavButton variant="text" onClick={() => SetToggle(!Toggle)}>Contact</NavButton>
                </Link>
              </span>
            </Fade>
          </Typo>
        </Stack>
      </Box>
    </Box>
  );
};

export default Sidenav;
