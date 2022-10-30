import React from "react";
import { useEffect } from "react";
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
  const [shadow, setShadow] = useState(false);

  const theme = useTheme();

  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  // console.log(isMatch)

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
    background: "rgba(0,0,0,0.8)",
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

  const changebgColor = () => {
    const scrollValue = window.scrollY;
    console.log(scrollValue);
    if (scrollValue > 100) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changebgColor);
  }, []);

  return (
    <React.Fragment>
      <Box
        height={"70px"}
        position="fixed"
        width="100%"
        top="0px"
        // border="1px solid red"
        zIndex="1000"
        // className={ !shadow ? 'navbar colorChange' : 'navbar'}
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
                      fontSize: "30px",
                      border:"1px solid white",
                      borderLeft:"none",
                      borderRight:"none",
                      color: "rgba(0,199,255,255)",
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
                          borderBottom: "1px solid #00C7FF",
                          color: "white",
                        }}
                      >
                        Home
                      </Typography>
                    </Link>
                    <Link to="about" className="link" smooth>
                      ABOUT
                    </Link>
                    <Link to="project" className="link" smooth>
                      PROJECTS
                    </Link>
                    <Link to="skills" className="link" smooth>
                      SKILLS
                    </Link>
                    <Link to="contact" className="link" smooth>
                      CONTACT
                    </Link>
                    <a
                      rel="noreferrer"
                      style={{ textDecoration: "none", color: "white" }}
                      target={"_blank"}
                      href="https://drive.google.com/file/d/1vzK7oPvQh9p2MdIso9_nBwTDN0ZTLrsj/view?usp=sharing"
                    >
                      RESUME
                    </a>
                  </CustomBox>
                </>
              )}
            </CustomToolbar>
          </CustomBar>
        </CustomNav>
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
