import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import "./Projects.css"
import { styled } from '@mui/material/styles'
// import ProjectPage from './ProjectsPage';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'
// import { makeStyles } from '@material-ui/core/styles';
import { projectsData } from './ProjectsData'
import { HiArrowRight } from "react-icons/hi";
import SingleProject from './SingleProject';



function Projects() {

    const ViewAllBtn = styled(Button)({
        color: '#fff',
        backgroundColor: 'purple',
        transition: 'color 0.2s',
        "&:hover": {
            color: '#aaa',
            backgroundColor: '#000',
        }
    });

    const ViewArr = styled(Box)({
        color: '#fff',
        backgroundColor: 'purple',
        width: '40px',
        height: '40px',
        padding: '0.5rem',
        fontSize: '1.05rem',
        borderRadius: '50%',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
        "&:hover": {
            color: '#bbb',
            backgroundColor: '#000',
        }
    });

    return (
        <>
            <Box
                paddingTop={{ xxs:"8vh", xs:"8vh", sm:"9vh", md:"16vh", lg: "16vh" }}
                sx={{ minHeight: "100vh", marginBottom: "2rem" }} id="projects">
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
                        <Typography variant='h1' width={"100%"} className="projects">PROJECTS</Typography>
                    </Grid>
                </Fade>
                <Fade bottom duration={2000} distance="50px" >
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        sx={{ marginTop: "0.5rem" }}
                    >
                        <div className="projects--body">
                            <div className="projects--bodyContainer">
                                {projectsData.slice(0, 3).map(project => (
                                    <SingleProject
                                        key={project.id}
                                        id={project.id}
                                        name={project.projectName}
                                        desc={project.projectDesc}
                                        tags={project.tags}
                                        code={project.code}
                                        demo={project.demo}
                                        image={project.image}
                                    />
                                ))}
                            </div>

                            {projectsData.length > 3 && (
                                <div className="projects--viewAll">
                                    <Link to="/projects">
                                        <ViewAllBtn>
                                            View All
                                            <ViewArr><HiArrowRight/></ViewArr>
                                        </ViewAllBtn>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </Grid>

                </Fade>
            </Box>
        </>
    )
}

export default Projects
