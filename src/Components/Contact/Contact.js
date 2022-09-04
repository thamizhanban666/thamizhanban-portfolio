import React, { useContext, useState } from 'react';
import { Grid, Typography, Button, Stack } from '@mui/material';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import './Contact.css';
import Fade from 'react-reveal/Fade';

// import { Snackbar, IconButton, SnackbarContent } from '@material-ui/core';
// import CloseIcon from '@material-ui/icons/Close';
// import axios from 'axios';
// import isEmail from 'validator/lib/isEmail';
// import { makeStyles } from '@material-ui/core/styles';
import {
	FaTwitter,
	FaLinkedinIn,
	FaGithub,
	FaYoutube,
	FaRedditAlien,
	FaStackOverflow,
	FaCodepen,
    FaInstagram,
    FaTelegram,
    FaWhatsapp,
    FaTelegramPlane
} from 'react-icons/fa';
import { AiOutlineSend, AiOutlineCheckCircle } from 'react-icons/ai';
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const SocialIcon = styled(Box) ({
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '25px',
    backgroundColor: "var(--txt-sec-darker)",
    color: '#fff',
    transition: '250ms ease-in-out',
    '&:hover': {
        transform: 'scale(1.1)',
        color: "var(--txt-opp)",
        backgroundColor: "var(--txt)",
        boxShadow: '0px 0px 10px 2px rgb(247, 0, 255, 0.8)'
    },
})

const DetailsIcon = styled(Box) ({
    backgroundColor: "var(--txt-sec-darker)",
    color: "#fff",
    borderRadius: '50%',
    width: '45px',
    height: '45px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '23px',
    transition: '250ms ease-in-out',
    flexShrink: 0,
    '&:hover': {
        transform: 'scale(1.1)',
        color: "var(--txt-opp)",
        backgroundColor: "var(--txt)",
        boxShadow: '0px 0px 10px 2px rgb(247, 0, 255, 0.8)'
    },
})

function Contact() {

    return (
        <>
            <Box
                paddingTop={{ xxs:"8vh", xs:"8vh", sm:"10vh", md:"16vh", lg: "16vh" }}
                sx={{ minHeight: "100vh" }} id="contact">
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
                        <Typography variant='h1' width={"100%"} className="contact" sx={{fontSize:{xxs:"2.15rem", sm:"3rem"}}} >CONTACT</Typography>
                    </Grid>
                </Fade>
                <Fade bottom duration={2000} distance="20px">
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        paddingX={{ xxs: "1rem", xs: "2rem", sm:"4rem",  md: "6rem", lg: "8rem" }}
                        marginY={"4rem"}

                    >

                        <div className='contacts-body'>
                            <div className='contacts-details'>
                                <a
                                    href={`mailto:thamizhanban666@gmail.com`}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='personal-details'
                                    style={{textDecoration:"none"}}
                                >
                                    <DetailsIcon>
                                        <FiAtSign />
                                    </DetailsIcon>
                                    <p>
                                       <a>thamizhanban666@gmail.com</a>
                                    </p>
                                </a>
                                <a
                                    href={`tel:+919087405536`}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='personal-details'
                                    style={{textDecoration:"none"}}
                                >
                                    <DetailsIcon>
                                        <FiPhone />
                                    </DetailsIcon>
                                    <p>
                                            <a>+91 90874 05536</a>
                                    </p>
                                </a>
                                <a
                                    href={`https://www.google.com/maps/place/chennai`}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='personal-details'
                                    style={{ textDecoration: "none" }}
                                >
                                    <DetailsIcon>
                                        <HiOutlineLocationMarker />
                                    </DetailsIcon>
                                    <p>
                                        <a>Chennai, TamilNadu</a>
                                    </p>
                                </a>

                                <div className='socialmedia-icons'>
                                    
                                    <SocialIcon
                                        href='http://github.com/thamizhanban666'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <FaGithub aria-label='GitHub' />
                                    </SocialIcon>
                                            
                                    <SocialIcon
                                        href='http://www.linkedin.com/in/thamizhanban666'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <FaLinkedinIn aria-label='LinkedIn' />
                                    </SocialIcon>

                                    <SocialIcon
                                        href='https://t.me/T_h_a_m_i_z_h_a_n_b_a_n'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <FaTelegramPlane aria-label='Telegram' />
                                    </SocialIcon>

                                    <SocialIcon
                                        href='https://wa.me/919087405536'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <FaWhatsapp aria-label='Whatsapp' />
                                    </SocialIcon>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </Grid>
                </Fade>

                <div className="footer" >
                    <p style={{ color: "var(--txt)" }}>
                        ©2022 by Thamizhanban
                    </p>
                </div>

            </Box>
        </>
    )
}

export default Contact;
