import React from "react";
import { useState } from "react";
// import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

// import navIcon from "../media/mylogo.png";
import { Link } from "react-scroll";
import { styled } from "@mui/system";
import DrawerComponent from "./DrawerComponent";
import { useMediaQuery, useTheme } from "@mui/material";

const Navbar = () => {
  const [scroll, setScroll] = useState(0);

  const theme = useTheme();
  // console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  // console.log(isMatch)

  const onScroll = ()=>{
    const scroll = document.documentElement.scrollTop;
    const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollpercent = (scroll / maxHeight) * 100;

    setScroll(scrollpercent);
  }

  window.addEventListener("scroll", onScroll);



  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
    },
  }));

  const CustomToolbar = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      // flexDirection: "column",
    },
  }));

  const CustomNav = styled(Box)(({ theme }) => ({
    display: "flex",
    height: "70px",
    width: "100%",
    position: "fixed",
    top: "0px",
    background: "rgba(0,0,75,0.8)",
    zIndex: 1000,
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
      display: "flex",
      height: "70px",
      margin: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      display: "flex",
      height: "70px",
      margin: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
      display: "flex",
      height: "70px",
      margin: "auto",
    },
  }));

  const CustomBar = styled(Box)(({ theme }) => ({
    position: "static",
    background: "transparent",
    boxShadow: "none",
    // border: "1px solid red",
    width: "90%",
    margin: "auto",
    color: "white",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginLeft: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      marginLeft: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "80%",
      marginLeft: "10px",
    },
  }));



  return (
    <React.Fragment>
      <Box
        height={"70px"}
        position="fixed"
        width="100%"
        top="0px"
        // border="1px solid red"
        zIndex="1000"
       
      >
        <CustomNav>
          <CustomBar>
            <CustomToolbar>
              <Link to="home" className="link" smooth>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  {/* <Box
                    component="img"
                    sx={{
                      maxHeight: "45px",
                      maxWidth: "45px",
                      objectFit: "cover",
                    }}
                    src={navIcon}
                  /> */}
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      flexGrow: 1,
                      fontWeight: "bold",
                      fontFamily: "Brush Script MT, Brush Script Std, cursive",
                      // fontFamily:"Sofia",
                      fontSize: "30px",
                      border: "1px solid white",
                      borderLeft: "none",
                      borderRight: "none",
                      color: "rgba(0,199,255,255)",
                      textShadow:"0 0 7px white,0 0 10px white,0 0 21px white,0 0 42px white,0 0 82px white, 0 0 92px white, 0 0 102px white,0 0 151px white",
                    }}
                  >
                    Pandit
                  </Typography>
                </Box>
              </Link>
              {isMatch ? (
                <>
                  <DrawerComponent />
                </>
              ) : (
                <>
                  <CustomBox>
                    <Link to="home" className="link" smooth>
                      <Typography
                        sx={{      
                          fontFamily: 'Lorem',                                     
                          borderBottom: "1px solid #00C7FF",
                          color: "#00C7FF",
                          fontWeight: "bold",
                          transition: "all 0.5s ease-in-out",
                          "&:hover": {
                            transform: "scale(1.1)",
                            textShadow: "0px 5px 15px",
                            fontWeight: "bold",
                          }
                        }}
                      >
                        HOME
                      </Typography>
                    </Link>
                    <Link to="about" className="link" smooth>
                      <Typography
                        sx={{
                          fontFamily: 'Lorem',                                     
                          transition: "all 0.5s ease-in-out",
                          "&:hover": {
                            transform: "scale(1.1)",
                            textShadow: "0px 5px 15px",
                            fontWeight: "bold",
                          },
                        }}
                      >
                        ABOUT
                      </Typography>
                    </Link>
                    <Link to="project" className="link" smooth>
                      <Typography
                        sx={{
                          fontFamily: 'Lorem',                                     
                          transition: "all 0.5s ease-in-out",
                          "&:hover": {
                            transform: "scale(1.1)",
                            textShadow: "0px 5px 15px",
                            fontWeight: "bold",
                          },
                        }}
                      >
                        PROJECTS
                      </Typography>
                    </Link>
                    <Link to="skills" className="link" smooth>
                      <Typography
                        sx={{
                          fontFamily: 'Lorem',                                     
                          transition: "all 0.5s ease-in-out",
                          "&:hover": {
                            transform: "scale(1.1)",
                            textShadow: "0px 5px 15px",
                            fontWeight: "bold",
                          },
                        }}
                      >
                        SKILLS
                      </Typography>
                    </Link>
                    <Link to="contact" className="link" smooth>
                      <Typography
                        sx={{
                          fontFamily: 'Lorem',                                     
                          transition: "all 0.5s ease-in-out",
                          "&:hover": {
                            transform: "scale(1.1)",
                            textShadow: "0px 5px 15px",
                            fontWeight: "bold",
                          },
                        }}
                      >
                        CONTACT
                      </Typography>
                    </Link>
                    <a
                      rel="noreferrer"
                      style={{ textDecoration: "none", color: "white" }}
                      href="https://drive.google.com/uc?export=download&id=1vzK7oPvQh9p2MdIso9_nBwTDN0ZTLrsj"
                    >
                      <Typography
                        sx={{
                          fontFamily: 'Lorem',                                     
                          transition: "all 0.5s ease-in-out",
                          "&:hover": {
                            transform: "scale(1.1)",
                            textShadow: "0px 5px 15px",
                            fontWeight: "bold",
                          },
                        }}
                      >
                        RESUME
                      </Typography>
                    </a>
                  </CustomBox>
                </>
              )}
            </CustomToolbar>
          </CustomBar>
        </CustomNav>
        <Box>
        <Box sx={{backgroundColor:"#00C7FF", height:"3px", width:`${scroll}%`, mt:"70px", filter:"brightness(200%)" , }}></Box>
        </Box>
      </Box>
    </React.Fragment>
  ); 
};

export default Navbar;
