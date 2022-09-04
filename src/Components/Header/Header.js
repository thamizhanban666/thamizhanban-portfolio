import React, { useContext, useState } from 'react'
import { AppBar, Typography, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-scroll';
import './Header.css';
import { motion } from "framer-motion";
import { styled } from '@mui/material/styles';
import Sidenav from '../Sidenav/Sidenav';
import myLogo from '../../Assets/Images/myLogo.png'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { MyContext } from '../../App';

const Buttondata = styled(Button)({
    color: "var(--txt)",
    opacity: " 0.8",
    textTransform: "capitalize",
    fontSize: "1.1rem",
    fontFamily: "Maven Pro",
    fontWeight: "600",
    margin: "5px",
    letterSpacing: "1px",
    transition: "all 0.3s linear",
    position: "relative",
    display: "inline-block",
    transition: "all o.3s linear",
    "&:hover": {
        color: "var(--txt-sec-darker)",
        // opacity: "0.9"
    },
    "&:active": {
        color: "var(--txt-secondary)",
    },
    "&:focus": {
        color: "var(--txt-secondary)",
    }
})


export default function Header() {
    const [navbar, setNavbar] = useState(false);
    const [Toggle, SetToggle] = useState(false);
    const { theme, setTheme } = useContext(MyContext);
    const switchTheme = () => {
            setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    const changeBackground = () => {
        if (window.scrollY >= 20) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    const handleReload = () => {
        window.location.reload();
    }

    return (
        <motion.div
            initial={{
                y: -300,
                x: 0,
                backgroundColor: [],
                opacity: 0,
            }}
            animate={{
                y: 0,
                x: 0,
                backgroundColor: [],
                opacity: 1,
            }}
            transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
        >
            <Sidenav Toggle={Toggle} SetToggle={SetToggle}/>
            <AppBar className={navbar ? "navbar active" : "navbar"} sx={{ padding:{xxs:"0 1rem",sm:"0 1.5rem"}}} >
                <Box 
                    paddingX= "1rem"
                    paddingY="0.3rem"
                    display="flex"
                    // justifyContent="space-between"
                    alignItems="center"
                >
                    <Box flexGrow={5} >
                        <img src={myLogo} alt="." className="App-logo" />
                    </Box>
                    {/* <Typography
                        variant='h4'
                        sx={{
                            fontFamily: "Dancing Script",
                            color: "var(--txt-secondary)",
                            opacity: "0.9",
                            cursor: "pointer",
                            ml:"0.5rem",
                            "&:hover": {
                                opacity: "0.7",
                            }
                        }}
                        onClick={handleReload}
                    >
                        Thamizh
                    </Typography> */}
                    <Box
                        sx={{ marginLeft: "auto" }} 
                        justigfySelf={"end"}
                        flexGrow={{md:4, lg:3}}
                        className="NavbarItems"
                    >

                        <Buttondata disableRipple className='navBtn'>
                            <Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link>
                        </Buttondata>
                        <Buttondata disableRipple className='navBtn'>
                            <Link to="skills" spy={true} smooth={true} offset={10} duration={500}>Skills</Link>
                        </Buttondata>
                        <Buttondata disableRipple className='navBtn2'>
                            <Link to="projects" spy={true} smooth={true} offset={20} duration={500}>Projects</Link>
                        </Buttondata>
                        <Buttondata disableRipple className='navBtn2'>
                            <Link to="education" spy={true} smooth={true} offset={20} duration={500}>Education</Link>
                        </Buttondata>
                        <Buttondata disableRipple className='navBtn2'>
                            <Link to="certification" spy={true} smooth={true} offset={20} duration={500}>Certification</Link>
                        </Buttondata>
                        {/* <Buttondata disableRipple className='navBtn2'>
                            <Link to="experience" spy={true} smooth={true} offset={50} duration={500}>Experience</Link>
                        </Buttondata> */}
                        <Buttondata disableRipple className='navBtn2'>
                            <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
                        </Buttondata>
                    </Box>
                    <Box display={"flex"} justifyContent={"end"} flexGrow={1} >
                        <Box onClick={switchTheme} sx={{cursor:"pointer"}} >
                            {theme === 'dark' ?
                                <LightModeIcon sx={{color: "gold",width:"25px" }} className="theme-btn" />
                                :
                                <Box className="moon-div theme-btn">
                                <DarkModeIcon sx={{color: "#fff",width:"20px" }} />
                                </Box>
                            }
                        </Box>
                        <Box className="icon">
                            <Box pl={0}>
                                <div className={`nav-icon-5 ${Toggle ? "open" : ""}`}
                                    onClick={() => SetToggle(!Toggle)}
                                >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </AppBar>
        </motion.div>
    )
}
