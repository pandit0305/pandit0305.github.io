import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
// import { Link } from "react-scroll";
// import pandit1Img from "../media/pandit1.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
// import pdfFile from './Pandit-Gangadhar-Resume.pdf';

const Home = () => {
  const CustomButton = styled(Button)(({ theme }) => ({
    border: "3px solid transparent",
    background: "#00C7FF",
    color: "white",
    width: "20%",
    fontWeight: "bold",
    borderRadius: "25px",
    transition: "all 0.5s ease-in-out",
    "$:hover": {
      transform: "scale(1.1)",
      border: "3px solid white",
      backgroundColor: "transparent",
    },

    [theme.breakpoints.down("md")]: {
      width: "35%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
  }));

  const CustomTitle = styled(Typography)(({ theme }) => ({
    color: "white",
    textAlign: "center",

    [theme.breakpoints.down("md")]: {
      fontSize: "3.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
  }));
  const CustomDesc = styled(Typography)(({ theme }) => ({
    color: "white",
    textAlign: "center",
    width: "60%",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.0rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  }));


  return (
    <Box sx={{ mt: 5 }}>
       

      <Box
        style={{
          height: "1px",
          width: "100%",
          border: 0,
          borderRadius: "25px",
        }}
        id="home"
      ></Box>
      <Box sx={{ p: 2, maxWidth: "1200px", mx: "auto", mt: 10 }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            component={"img"}
            sx={{ height: "150px", width: "150px", borderRadius: "50%" }}
            src={"https://avatars.githubusercontent.com/u/71085799?v=4"}
          />
        </Box>
        <Typography
          sx={{ color: "white", textAlign: "center", mb: 1 ,mt:2, fontFamily: 'Lorem'}}
          variant="h6"
        >
          Hello, I am Pandit Gangadhar
        </Typography>
        <Box sx={{display: "flex", justifyContent: "center"}}>
          <Box
          component={"img"}
          sx={{ml:"40px"}}
            src={"https://readme-typing-svg.demolab.com/?font=Fira+Code&size=18&duration=3000&pause=1000&color=blue&background=FFFFFF00&width=300&height=51&lines=Full+Stack+Web+Developer"}
            
          />
      
        </Box>
      
        <CustomDesc>
          <Typography
            variant="p"
            sx={{
              color: "white",
              textAlign: "center",
              mb: 2,
              fontSize: "18px",
              fontFamily: 'Lorem'
            }}
          >
            Inspiring full stack web developer, having problem-solving ability
            and proficiency in MERN Stack. A quick learner and always curious to
            learn new things in terms of technology. Worked on two group
            projects and 15+ solo projects.
          </Typography>
        </CustomDesc>
        <CustomTitle variant="h2" style={{fontFamily: 'Lorem'}}>
          I enjoy{" "}
          <span style={{ color: "rgba(0,199,255,255)" }}>Building </span>
          and <span style={{ color: "rgba(0,199,255,255)" }}>designing </span>
          for the web.
        </CustomTitle>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <Box sx={{ mt: 4, mb: 4 }}>
            <a
              rel="noreferrer"
              target={"_blank"}
              href="https://www.linkedin.com/in/pandit-gangadhar/"
            >
              <LinkedInIcon sx={{ mr: 2, color: "white" }} />
            </a>
            <a
              rel="noreferrer"
              target={"_blank"}
              href="https://github.com/pandit0305"
            >
              <GitHubIcon sx={{ mr: 2, color: "white" }} />
            </a>
            <a
              rel="noreferrer"
              target={"_blank"}
              href="mailto: panditgangadhar.may3@gmail.com"
            >
              <EmailIcon sx={{ mr: 2, color: "white" }} />
            </a>
            <a rel="noreferrer" target={"_blank"} href="tel:+91-797-999-5281">
              <PhoneIcon sx={{ mr: 2, color: "white" }} />
            </a>
          </Box>
          {/* <CustomButton>
            <a
              rel="noreferrer"
              // download={true}
              target={"_blank"}
              style={{ textDecoration: "none", color: "white" }}
              href={"https://drive.google.com/file/d/1vzK7oPvQh9p2MdIso9_nBwTDN0ZTLrsj/view?usp=share_link"}
            >
              RESUME
            </a>
          </CustomButton> */}
          <CustomButton>
            <a
              rel="noreferrer"
              // download={true}
              
              style={{ textDecoration: "none", color: "white" }}
              href={"https://drive.google.com/uc?export=download&id=1vzK7oPvQh9p2MdIso9_nBwTDN0ZTLrsj"}
            >
              DOWNLOAD RESUME
            </a>
          </CustomButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
