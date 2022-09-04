import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Fade } from 'react-reveal'
import certificateCardData from './cardData';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Certification.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper";
import styled from '@emotion/styled';

const ViewButton = styled(Button)({
  backgroundColor: "#fff",
  color: "#222",
  // opacity: "0.9",
  border: "2px solid #fff",
  textTransform: "capitalize",
  fontSize: "13px",
  fontWeight:"bold",
  cursor: "pointer",
  fontFamily: "Maven Pro",
  padding: "1px",
  borderRadius:"1rem",
  "&:hover": {
    backgroundColor: "#000",
    color: "#fff",
    transition: "all 0.3s linear",
  },
  "&:focus": {
      backgroundColor: "rgba(195, 0, 255, 0.07)"
  },
})

function Certification() {
  return (
    <Box
      paddingTop={{ xxs:"8vh", xs:"8vh",sm:"9vh", md:"16vh", lg: "16vh" }}
      sx={{ minHeight: "100vh", marginBottom: "2rem" }}
      id="certification"
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
              <Typography variant='h1' width={"100%"} className="certification" sx={{fontSize:{xxs:"2.15rem", sm:"3rem"}}}>CERTIFICATION</Typography>
          </Grid>
      </Fade>
        <Box paddingX={{ xxs: "1rem", md: "8rem" }}>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 10,
              stretch: -5,
              depth: 850,
              modifier: 0.75,
              slideShadows: true,
            }}
            loop={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, EffectCoverflow, Pagination, Navigation ]}
            className="mySwiper"
          >
            {
              certificateCardData.map((data) => {
                return (
                  <SwiperSlide>
                    <img className='swiper-img' src={data.image} />
                    <Box
                      className='certificate-detail'
                    >
                      <Box display='flex'  alignItems='center' >
                        <Typography sx={{fontWeight:'bold', letterSpacing:'0.06rem' ,fontFamily:'poppins', mr:"5px"}} >{ data.course }</Typography>
                        <Typography fontSize={11} sx={{ ml: 'auto' }} >{ data.date }</Typography>
                      </Box>
                      <Box display='flex' pt='5px' >
                        <Typography fontSize={12} >{data.institute}</Typography>
                        <ViewButton sx={{ ml: 'auto' }} >
                          <a href={data.link} target="_blank" rel='noreferrer' className='view-cert'>
                            View
                          </a>
                        </ViewButton>
                      </Box>
                    </Box>
                  </SwiperSlide>  
                )
              })
            }
          </Swiper>
        </Box>
      
    </Box>
  )
}

export default Certification;