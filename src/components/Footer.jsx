import { Box, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          maxWidth: "1300px",
          borderTop: "1px solid #7889AB",
          mx: "auto",
          padding: 3,
          height:"300px",
          display: "flex",
          justifyContent: "space-around",
          mt:10,
          fontFamily: 'Lorem'
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="body1"
            sx={{ color: "#7889AB", fontWeight: "bold", mb: 2, fontFamily: 'Lorem' }}
          >
            PAGES
          </Typography>
          <Link
            to="home"
            className="link"
            smooth
            style={{ color: "white", margin: "0.5rem 0", cursor: "pointer" }}
          >
            Home
          </Link>
          <Link
            to="project"
            className="link"
            smooth
            style={{ color: "white", margin: "0.5rem 0", cursor: "pointer" }}
          >
            Project
          </Link>
          <Link
            to="about"
            className="link"
            smooth
            style={{ color: "white", margin: "0.5rem 0", cursor: "pointer" }}
          >
            About
          </Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: "#7889AB", fontWeight: "bold", mb: 2,fontFamily: 'Lorem' }}
          >
            SOCIAL
          </Typography>
          <a
          rel="noreferrer"
            target={"_blank"}
            style={{ textDecoration: "none" }}
            href="https://github.com/pandit0305"
          >
            <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            >
              <GitHubIcon sx={{ mr: 2, color: "white" }} />
              <Typography variant="body2" sx={{ color: "white", my: 1,fontFamily: 'Lorem' }}>
                GitHub
              </Typography>
            </Box>
          </a>

          <a
          rel="noreferrer"
            href="mailto: panditgangadhar.may3@gmail.com"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            >
              <EmailIcon sx={{ mr: 2, color: "white" }} />
              <Typography variant="body2" sx={{ color: "white", my: 1 ,fontFamily: 'Lorem'}}>
                Email
              </Typography>
            </Box>
          </a>

          <a 
          rel="noreferrer"
            href="https://www.linkedin.com/in/pandit-gangadhar/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            >
              <LinkedInIcon sx={{ mr: 2, color: "white" }} />
              <Typography variant="body2" sx={{ color: "white", my: 1 ,fontFamily: 'Lorem'}}>
                LinkedIn
              </Typography>
            </Box>
          </a>
        </Box>
      </Box>
        <Box style={{width:"100%", color:"white",textAlign:"center", mb:"5px", fontFamily: 'Lorem'}}>
            Created By <span style={{color:"#00C7FF"}}>Pandit Gangadhar</span>
        </Box>
    </>
  );
};

export default Footer;
