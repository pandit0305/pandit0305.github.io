import React from "react";
import { Box, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";

function Contact() {
  // const CustomButton = styled(Button)(({ theme }) => ({
  //     border: "3px solid white",
  //     borderRadius: "25px",
  //     color: "white",
  //     width: "15%",
  //     display: "block",
  //     "&:hover": {
  //       border: "3px solid #00C7FF",
  //     },
  //     [theme.breakpoints.down("md")]: {
  //       width: "50%",
  //     },
  //     [theme.breakpoints.down("sm")]: {
  //       width: "75%",
  //     },
  //   }));
  return (
    <Box sx={{mt:10}}>
      <Box
        style={{
          height: "1px",
          backgroundColor: "#00C7FF",
          width: "100%",
          border: 0,
          borderRadius: "25px",
        }}
        id="contact"
      ></Box>
      <Typography
        variant="h4"
        sx={{ color: "white", mt: 15, mb: 8, textAlign: "center" }}
      >
        GET IN <span style={{color:"#00C7FF"}}>TOUCH</span>
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "1rem",
          mb: 8,
        }}
      >
        <a
        rel="noreferrer"
          target={"_blank"}
          href="https://www.linkedin.com/in/pandit-gangadhar/"
        >
          <LinkedInIcon
            sx={{
              mr: 2,
              color: "white",
              border: "1px solid white",
              padding: "30px",
              borderRadius: "10px",
              fontSize: "32px",
            }}
          />
        </a>
        <a rel="noreferrer" target={"_blank"} href="https://github.com/pandit0305">
          <GitHubIcon
            sx={{
              mr: 2,
              color: "white",
              border: "1px solid white",
              padding: "30px",
              borderRadius: "10px",
              fontSize: "32px",
            }}
          />
        </a>
        <a rel="noreferrer" target={"_blank"} href="mailto: panditgangadhar.may3@gmail.com">
          <EmailIcon
            sx={{
              mr: 2,
              color: "white",
              border: "1px solid white",
              padding: "30px",
              borderRadius: "10px",
              fontSize: "32px",
            }}
          />
        </a>
        <a rel="noreferrer" target={"_blank"} href="tel:+91-797-999-5281">
          <PhoneIcon
            sx={{
              mr: 2,
              color: "white",
              border: "1px solid white",
              padding: "30px",
              borderRadius: "10px",
              fontSize: "32px",
            }}
          />
        </a>
      </Box>
      <Box sx={{display:"flex", justifyContent:"space-around", flexWrap:"wrap", maxWidth:"600px", margin:"auto"}}>
        <a rel="noreferrer" target={"_blank"} href="tel:+91-797-999-5281" style ={{color:"white", textDecoration:"none"}}>
          <PhoneIcon
            sx={{
              mr: 2,
              color: "white",
            }}
          />
          +91-797-999-5281
        </a>
        <a rel="noreferrer" target={"_blank"} href="mailto: panditgangadhar.may3@gmail.com" style ={{color:"white", textDecoration:"none"}}>
          <EmailIcon
            sx={{
              mr: 2,
              color: "white",
            }}
          />
          panditgangadhar.may3@gmail.com
        </a>
      </Box>
      {/* <CustomButton variant="outlined" sx={{ mx: "auto", mt: 3, mb: 8 }}>
        Get In Touch
      </CustomButton> */}
    </Box>
  );
}

export default Contact;
