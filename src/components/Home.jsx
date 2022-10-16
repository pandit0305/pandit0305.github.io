import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
// import { Link } from "react-scroll";
// import contactmeImg from "../media/contactme.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";

const Home = () => {
  const CustomButton = styled(Button)(({ theme }) => ({
    border: "3px solid transparent",
    background: "#00C7FF",
    color: "white",
    width: "20%",
    fontWeight: "bold",
    borderRadius: "25px",
    "$:hover": {
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
    <Box sx={{ mt: 8, p: 2, maxWidth: "1200px", mx: "auto" }} id="home">
      <Typography
        sx={{ color: "white", textAlign: "center", mb: "2" }}
        variant="h6"
      >
        Hello, I am Pandit Gangadhar
      </Typography>
      <CustomTitle variant="h1">
        I enjoy <span style={{ color: "rgba(0,199,255,255)" }}>Building </span>
        and <span style={{ color: "rgba(0,199,255,255)" }}>designing </span>
        for the web.
      </CustomTitle>

      <CustomDesc>
        <Typography
          variant="p"
          sx={{ color: "white", textAlign: "center", mb: 2 ,fontSize:'18px'}}
        >
          Inspiring full stack web developer, having problem-solving ability and
          proficiency in MERN Stack. A quick learner and always curious to learn
          new things in terms of technology. Worked on two group projects and
          15+ solo projects.
        </Typography>
      </CustomDesc>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        {/* <Box
          component={"img"}
          sx={{ height: "200px", width: "200px", mt: 4, mb: 4 }}
          src={contactmeImg}
        /> */}
        <Box sx={{ mt: 4, mb: 4 }}>
          <a
          rel="noreferrer"
            target={"_blank"}
            href="https://www.linkedin.com/in/pandit-gangadhar/"
          >
            <LinkedInIcon sx={{ mr: 2, color: "white" }} />
          </a>
          <a rel="noreferrer" target={"_blank"} href="https://github.com/pandit0305">
            <GitHubIcon sx={{ mr: 2, color: "white" }} />
          </a>
          <a rel="noreferrer" target={"_blank"} href="mailto: panditgangadhar.may3@gmail.com">
            <EmailIcon sx={{ mr: 2, color: "white" }} />
          </a>
          <a rel="noreferrer" target={"_blank"} href="tel:+91-797-999-5281">
            <PhoneIcon sx={{ mr: 2, color: "white" }} />
          </a>
        </Box>
        <CustomButton>
          <a
          rel="noreferrer"
          target="_blank"
            style={{ textDecoration: "none", color: "white" }}
            href="https://drive.google.com/file/d/1vzK7oPvQh9p2MdIso9_nBwTDN0ZTLrsj/view?usp=sharing"
          >
            RESUME ME
          </a>
        </CustomButton>
      </Box>
    </Box>
  );
};

export default Home;
