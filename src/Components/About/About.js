import React from 'react'
import { Grid, Typography, Button, TextField } from '@mui/material'
import { styled } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';
import './About.css'
import { Developer } from '../Images/Allsvg';
import { motion } from "framer-motion";
import { Box } from '@mui/system';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';
import GreetingLottie from '../GreetingLottie';

const ResumeButton = styled(Button)({
  color: "var(--txt)",
  border: "1.5px solid var(--txt-sec-darker)",
  textTransform: "capitalize",
  fontSize: "16px",
  fontWeight:"bold",
  cursor: "pointer",
  fontFamily: "Maven Pro",
  padding: "0.3rem 1rem",
  "&:hover": {
    borderWidth:"3px",
    // transition: "all 0.3s ease-in",
  },
  "&:focus": {
    backgroundColor: "#edd4f7"
  },

})


function About() {
  return (
    <motion.div
      initial={{ y: 300, x: 0, backgroundColor: [], opacity: 0, }}
      animate={{ y: 0, x: 0, backgroundColor: [], opacity: 1, }}
      transition={{ ease: "easeOut", duration: 0.5, delay: 1 }}
    >
      <Box
        paddingTop={{ xxs: "12vh", xs: "12vh", sm:"13vh", md:"15vh", lg: "15vh" }}
        sx={{ minHeight: "100vh", color: "var(--txt)" }} id="about"
      >
        <Grid container
          direction="row"
          justifyContent="center"
          alignItems="center"
          paddingX={{ xxs: "1rem", sm:"2rem", md: "8rem" }}
          className="aboutContainer"
        >
          <Grid item sm={12} md={12} lg={6} direction="column" className="bio">
            <Box sx={{ padding:{xxs: "1rem", md: "2rem" } }}>
              <Box display={"flex"} flexWrap={"wrap"}>
                <Typography variant="h4" mr={2} >Hi, I'm </Typography>
                <Typography variant="h3" >Thamizhanban </Typography>
              </Box>
              <Typography mt={0}>
                <Typewriter
                  options={{
                    strings: ["Full Stack Developer",
                      "Web Developer",
                      "MERN Stack Developer",
                      "Frontend Developer",
                      "Backend Developer",
                      "React.js Developer"
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 10,
                    wrapperClassName:"typewriterWrapper",
                    cursorClassName:"typewriterCursor"
                  }}
                />
              </Typography>
            </Box>
            <Box sx={{ padding:{xxs: "1rem", md: "2rem" } }}>
              <Typography variant="p">
                A Full Stack Developer specialised in building web applications
                using a wide range of skills sets like HTML, CSS, JavaScript, React.js, Node.js, MongoDB, MySQL etc.<br/>
                Also, built single-page applications (SPA), responsive web design, and UI using React.js .
              </Typography>
            </Box>
            <Box sx={{ padding: "1.5rem 0 0 2rem" }}>
              <ResumeButton
                disableRipple
                endIcon={<DownloadIcon />}
              >
                <a href="https://drive.google.com/file/d/1j4TZiLp1k5TlX3iYzDCSwRDiTh38VccM/view?usp=sharing" target="_blank" className='resume'>
                  Resume
                </a>
              </ResumeButton>
            </Box>
          </Grid>
          <Grid item xxs={12} xs={12} sm={12} md={12} lg={6}
            sx={{ paddingTop: "0rem" }}
            className="maleDev"
          >
            <Box  width={{ xxs:"90vw",xs:"80vw",sm:"70vw", md: "50vw" }}>
              <GreetingLottie animationPath="Lottie/coding.json" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  )
}

export default About
