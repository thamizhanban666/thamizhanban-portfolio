import { Grid, Typography, Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/system'
import React from 'react'
import { styled } from '@mui/material/styles';
import './Skills.css';
import Fade from 'react-reveal/Fade';
import GreetingLottie from '../GreetingLottie';
import htmlIcon from '../../Assets/svg-images/html-icon.svg'
import cssIcon from '../../Assets/svg-images/css-icon.svg'
import javascriptIcon from '../../Assets/svg-images/javascript-icon.svg'
import reactIcon from '../../Assets/svg-images/react-icon.svg'
import bootstrapIcon from '../../Assets/svg-images/bootstrap-icon.svg'
import muiIcon from '../../Assets/svg-images/mui-icon.svg'
import githubIcon from '../../Assets/svg-images/github-icon.svg'
import nodejsIcon from '../../Assets/svg-images/nodejs-icon.svg'
import mongodbIcon from '../../Assets/svg-images/mongodb-icon.svg'
import mysqlIcon from '../../Assets/svg-images/mysql-icon.svg'
import vscodeIcon from '../../Assets/svg-images/vscode-icon.svg'
import postmanIcon from '../../Assets/Images/postman-icon.png'

const InnerText = styled(Typography)({
    color: "#fff",
    opacity: "0.8",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "1.5",
    letterSpacing: "0.01em",
    marginTop: "10px",
    textTransform: "capitalize",
})

function Skills() {
    return (
        <>
            <Box
                paddingTop={{ xxs:"2vh", xs:"2vh", sm:"3vh", md:"6vh", lg: "6vh" }}
                sx={{ minHeight: "100vh" }}
                id="skills"
            >
                <Fade left cascade>
                    <Grid container
                        direction={"row"}
                        paddingX={{ xxs: "2rem", md: "8rem" }}
                        textAlign={{ xxs: "center", xs: "center", sm: "center", md: "left", lg: "left" }}
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                        marginBottom={"3rem"}
                    >

                        <Typography variant='h1' width={"100%"} className="skills">SKILLS</Typography>

                    </Grid>
                </Fade>
                <Fade right duration={3000} distance="30px">
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        paddingX={{ xxs: "1rem", md: "8rem" }}
                    >

                        <Grid item xxs={12} xs={12} sm={12} md={12} lg={5} className="skillSvgConatiner">
                            <Box width={{ xxs: "90vw", xs: "80vw", sm: "70vw", md: "50vw", lg:"fit-content" }}>
                                <GreetingLottie animationPath="Lottie/skills.json" />
                            </Box>
                        </Grid>

                        <Grid item xxs={12} xs={12} sm={12} md={12} lg={7} className="skillContainer">
                            <Stack sx={{ marginTop: "20px", color: "gray", display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                                <Box className="skillItem">
                                    <Box className={"icon-box"}>
                                        <img src={htmlIcon} alt="HTML5" />
                                    </Box>
                                    <InnerText>HTML5</InnerText>
                                </Box>
                                <Box className="skillItem">
                                    <Box className={"icon-box"}>
                                        <img src={cssIcon} alt="CSS3"/>
                                    </Box>
                                    <InnerText>CSS3</InnerText>
                                </Box>
                                <Box className="skillItem">
                                    <Box className={"icon-box"}>
                                        <img src={javascriptIcon} alt="JS"/>
                                    </Box>
                                    <InnerText>JavaScript</InnerText>
                                </Box>
                                <Box className="skillItem">
                                    <Box className={"icon-box"}>
                                        <img src={reactIcon} alt="React"/>
                                    </Box>
                                    <InnerText>React</InnerText>
                                </Box>
                                <Box className="skillItem">
                                    <Box className={"icon-box"}>
                                        <img src={bootstrapIcon} alt="Bootstrap"/>
                                    </Box>
                                    <InnerText>Bootstrap</InnerText>
                                </Box>
                                <Box className="skillItem">
                                    <Box className={"icon-box"}>
                                        <img src={muiIcon} alt="MUI"/>
                                    </Box>
                                    <InnerText>Material UI</InnerText>
                                </Box>
                                <Box className="skillItem">
                                    <Box className={"icon-box"}>
                                        <img src={nodejsIcon} alt="Node.js"/>
                                    </Box>
                                    <InnerText>Node.js</InnerText>
                                </Box>
                                <Box className="skillItem">
                                    <Box className={"icon-box"}>
                                        <img src={mongodbIcon} alt="MongoDB"/>
                                    </Box>
                                    <InnerText>MongoDB</InnerText>
                                </Box>
                                <Box className="skillItem">
                                    <Box className={"icon-box"}>
                                        <img src={mysqlIcon} alt="MySQL"/>
                                    </Box>
                                    <InnerText>My SQL</InnerText>
                                </Box>
                                <Box className="skillItem">
                                    <Box className={"icon-box"}>
                                        <img src={githubIcon} alt="Github"/>
                                    </Box>
                                    <InnerText>Github</InnerText>
                                </Box>
                                <Box className="skillItem">
                                    <Box className={"icon-box"}>
                                        <img src={vscodeIcon} alt="VScode"/>
                                    </Box>
                                    <InnerText>VS code</InnerText>
                                </Box>
                                <Box className="skillItem">
                                    <Box className={"icon-box"}>
                                        <img src={postmanIcon} alt="Postman" style={{ width: "42px",height:"42px"}} />
                                    </Box>
                                    <InnerText>Postman</InnerText>
                                </Box>

                            </Stack>
                        </Grid>

                    </Grid>
                </Fade>
            </Box>
        </>
    )
}

export default Skills
