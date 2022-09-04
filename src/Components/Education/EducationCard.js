import React from 'react'
import { borderRadius, Box } from '@mui/system';
import { Grid, Typography, Stack, Button } from '@mui/material';
import { RightArrow, UpArrow } from '../Images/Allsvg'
import { Fade, Flip } from 'react-reveal';
import { styled } from '@mui/material/styles';
import './Education.css';

const VisitButton = styled(Button)({
    color: "var(--txt-sec-darker)",
    opacity: "0.9",
    border: "1px solid var(--txt-sec-darker)",
    textTransform: "capitalize",
    fontSize: "16px",
    cursor: "pointer",
    fontFamily: "Maven Pro",
    padding: "0.3rem 1rem",
    marginBottom: "1rem",
    "&:hover": {
        backgroundColor: "rgba(195, 0, 255, 0.07)",
        transition: "all 0.3s linear",
    },
    "&:focus": {
        backgroundColor: "rgba(195, 0, 255, 0.07)"
    },

})

const CustomGrid = styled(Grid)({
    boxShadow: "2px 2px 10px #000",
    borderRadius: "8px"
})

const CustomText = styled(Typography)({
    fontSize: "17px",
    fontWeight: "600",
    fontFamily: "Maven Pro",
    letterSpacing: "0",
})

const EducationCard = ({educationDetail}) => {
  return (
    <Flip bottom duration={2000}>
      <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      paddingX={{ xxs: "1rem", xs: "2rem", sm:"4rem", md: "6rem", lg: "8rem" }}
      marginY={"4rem"}

    >
        {/* <Grid item
            xs={12} md={3} lg={2}
            spacing={2}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
            paddingBottom={{ xxs: "1rem" }}
        >
            <Flip left duration={2000}>
                <Box className="logoHead">
                    <img src={} id="" title='' />
                </Box>
            </Flip>
        </Grid> */}
        <Grid item xs={12} md={9} lg={10} >
            <Fade right duration={1000} distance={"20px"}>
                <CustomGrid>
                    <Stack direction={"column"}>
                        <Box
                            sx={{
                                backgroundColor: "var(--txt-sec-darker)",
                                // opacity: "0.9",
                                color: "#fff",
                                padding: "1rem 2rem ",
                                borderTopLeftRadius: "8px",
                                borderTopRightRadius: "8px",
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                            flexDirection={{ xxs: "column", xs: "column", sm: "column", md: "column", lg: "row" }}
                        >
                            <Box>
                                <CustomText>{ educationDetail.degree }</CustomText>
                                <CustomText>{ educationDetail.university }</CustomText>
                            </Box>
                            <Box>
                                <CustomText sx={{fontSize:"14px"}}>{ educationDetail.date }</CustomText>
                                <CustomText sx={{textAlign:"end", fontSize:"15px"}}>{ educationDetail.score }</CustomText>
                            </Box>

                        </Box>
                        <Box sx={{ padding: "0.5rem 2rem", }}>
                          {
                            educationDetail.points.map((p)=>{
                              return (
                                <Typography
                                    fontSize={{ xxs: "0.75rem", xs: "1rem" }}
                                    fontFamily={"Maven Pro"}

                                >
                                    <span><RightArrow width="10px" height="10px" fill="var(--txt-secondary)" /></span>
                                    <span style={{
                                      color: "var(--txt)",
                                      opacity: "0.6",
                                      marginLeft: "7px"
                                    }}
                                    >
                                      { p }
                                    </span>
                                </Typography>
                              )
                            })
                          }
                        </Box>
                        {/* <Box
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                paddingX: "2rem"
                            }}
                        >
                            <VisitButton disableRipple><a href="#" target="_blank" className="websiteVisit">Visit Website</a></VisitButton>
                        </Box> */}
                    </Stack>
                </CustomGrid>
            </Fade>
        </Grid>
      </Grid>
    </Flip>
  )
}

export default EducationCard