import React from 'react';
import { borderRadius, Box } from '@mui/system';
import { Grid, Typography, Stack, Button } from '@mui/material';
import './Education.css';
import { Fade, Flip } from 'react-reveal';
import educationData from './educationData';
import EducationCard from './EducationCard';


function Education() {
    return (
        <>
            <Box
                paddingTop={{ xxs:"8vh", xs:"8vh",sm:"9vh", md:"16vh", lg: "16vh" }}
                sx={{ minHeight: "100vh", marginBottom: "2rem" }}
                id="education"
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
                        <Typography variant='h1' width={"100%"} className="education" sx={{fontSize:{xxs:"2.15rem", sm:"3rem"}}}>EDUCATION</Typography>
                    </Grid>
                </Fade>
                {
                    educationData.map((educationDetail) => {
                        return (
                            <EducationCard educationDetail={ educationDetail } />
                        )
                    })
                }
            </Box>
        </>
    )
}

export default Education
