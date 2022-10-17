import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import navIcon from "../media/mylogo.png";
import { Link } from "react-scroll";
import { styled } from "@mui/system";
import DrawerComponent from "./DrawerComponent";
import { useMediaQuery, useTheme } from "@mui/material";

const Navbar = () => {

  const theme = useTheme();

  // console.log(theme)
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  // console.log(isMatch)

  const forsmall = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(forsmall)

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

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1, px: 5, py: 2, maxWidth: "1200px", mx: "auto" }}>
        <AppBar
          position="static"
          style={{ background: "transparent", boxShadow: "none" }}
        >
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
                <Box
                  component="img"
                  sx={{ maxHeight: "45px", maxWidth: "45px", objectFit: "cover" }}
                  src={navIcon}
                />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, fontWeight: "bold" }}
                >
                  PANDIT
                </Typography>
              </Box>

            </Link>
            {isMatch ? (
              <>
                {/* <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, fontWeight: "bold" }}
                >
                  
                </Typography> */}
                <DrawerComponent />
              </>
            ) : (
              <>
                <CustomBox>
                  {/* <Tabs
                    textColor="inherit"
                    value={0}
                    onChange={(e, value) => setValue(value)}
                    indicatorColor="#00C7FF"
                  > */}
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
                  <Link to="contact" className="link" smooth>
                    CONTACT
                  </Link>
                  <Link to="project" className="link" smooth>
                    PROJECTS
                  </Link>
                  <Link to="skills" className="link" smooth>
                    SKILLS
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
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
