import { Box, Typography, styled } from "@mui/material";
import React from "react";
// import Testimonial from "./Testimonial";
import Introduction from "../components/Introduction";

const About = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
    },
  }));

  const CustomtitleBox = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
    },
  }));

  return (
    <Box>
      <Box
        style={{
          height: "1px",
          width: "100%",
          border: 0,
          borderRadius: "25px",
        }}
        id="about"
      ></Box>
      <Box sx={{ maxwidth: "1300px", my: 10, padding: 3, mx: "auto", mt: 15 }}>
        <CustomtitleBox>
          <Typography
            variant="h4"
            sx={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            ABOUT <span style={{ color: "#00C7FF" }}>ME</span>
          </Typography>
          <div
            style={{
              height: "5px",
              backgroundColor: "#00C7FF",
              width: "50%",
              border: 0,
              borderRadius: "25px",
            }}
          ></div>
        </CustomtitleBox>

        <CustomBox sx={{ my: 7 }}>
          {/* <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial /> */}
          <Introduction />
        </CustomBox>

        {/* <div
          style={{
            height: "1px",
            backgroundColor: "#00C7FF",
            width: "100%",
            border: 0,
            borderRadius: "25px",
          }}
        ></div> */}
      </Box>
    </Box>
  );
};

export default About;
