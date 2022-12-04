import React from "react";
import {
  Box,
  Typography,
  Input,
  Button,
  TextareaAutosize,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { styled } from "@mui/material/styles";

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
  const CustomBox = styled(Box)(() => ({
    // border: "1px solid white",
    width: "20%",
    margin: "auto",
    borderRadius: "10px",
  }));
  return (
    <Box sx={{ mt: 10 }}>
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
        sx={{ color: "white", mt: 25, mb: 8, textAlign: "center" }}
      >
        GET IN <span style={{ color: "#00C7FF" }}>TOUCH</span>
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
              transition: "all 0.5s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
                boxShadow: "#00C7FF 0px 5px 15px",
              },
            }}
          />
        </a>
        <a
          rel="noreferrer"
          target={"_blank"}
          href="https://github.com/pandit0305"
        >
          <GitHubIcon
            sx={{
              mr: 2,
              color: "white",
              border: "1px solid white",
              padding: "30px",
              borderRadius: "10px",
              fontSize: "32px",
              transition: "all 0.5s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
                boxShadow: "#00C7FF 0px 5px 15px",
              },
            }}
          />
        </a>
        <a
          rel="noreferrer"
          target={"_blank"}
          href="mailto: panditgangadhar.may3@gmail.com"
        >
          <EmailIcon
            sx={{
              mr: 2,
              color: "white",
              border: "1px solid white",
              padding: "30px",
              borderRadius: "10px",
              fontSize: "32px",
              transition: "all 0.5s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
                boxShadow: "#00C7FF 0px 5px 15px",
              },
            }}
          />
        </a>
        <a rel="noreferrer" target={"_blank"} href="https://wa.me/7979995281">
          <WhatsAppIcon
            sx={{
              mr: 2,
              color: "white",
              border: "1px solid white",
              padding: "30px",
              borderRadius: "10px",
              fontSize: "32px",
              transition: "all 0.5s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
                boxShadow: "#00C7FF 0px 5px 15px",
              },
            }}
          />
        </a>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          maxWidth: "600px",
          margin: "auto",
        }}
      >
        <a
          rel="noreferrer"
          target={"_blank"}
          href="tel:+91-797-999-5281"
          style={{ color: "white", textDecoration: "none" }}
        >
          <PhoneIcon
            sx={{
              mr: 2,
              color: "white",
            }}
          />
          +91-797-999-5281
        </a>
        <a
          rel="noreferrer"
          target={"_blank"}
          href="mailto: panditgangadhar.may3@gmail.com"
          style={{ color: "white", textDecoration: "none" }}
        >
          <EmailIcon
            sx={{
              mr: 2,
              color: "white",
            }}
          />
          panditgangadhar.may3@gmail.com
        </a>
      </Box>
      <Typography
        variant="h4"
        sx={{ color: "white", mt: 15, mb: 8, textAlign: "center" }}
      >
        Text <span style={{ color: "#00C7FF" }}>Me</span>
      </Typography>
      <CustomBox>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            // width:"content-fit",
            transition: "all 0.5s ease-in-out",
            "&:hover": {
              transition: "scale(1,1)",
              borderRadius: "30px",
            },
          }}
        >
          <form
            action="https://getform.io/f/89f12994-8ac0-4ffe-96c2-dbd3acc8bc59"
            method="POST"
          >
            <Box>
              <Input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                sx={{ color: "white" }}
              />
            </Box>
            <Box>
              <Input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                sx={{ color: "white", mt: 2 }}
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <TextareaAutosize
                type="text"
                name="Message"
                placeholder="Enter Your Message"

              />
            </Box>
            <Box>
              <Button
                type="submit"
                sx={{
                  color: "white",
                  border: "1px solid #00C7FF",
                  mt: 2,
                  transition: "all 0.5s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.1)",
                    backgroundColor: "#00C7FF",
                    color: "white",
                  },
                }}
              >
                Let's Talk
              </Button>
            </Box>
          </form>
        </Box>
      </CustomBox>
    </Box>
  );
}

export default Contact;
