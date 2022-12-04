import { Typography, Box, styled } from "@mui/material";
import React from "react";
import { icons } from "../constants/icons";
import Icon from "./Icon";

const Stack = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    maxWidth: "1300px",
    display: "flex",
    justifyContent: "space-between",
    mx: "auto",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  }));

  const StackBox = styled(Box)(({ theme }) => ({
    marginLeft: "1.5rem",
    flex: 1,
    display: "flex",
    justifyContent: "space-around",
    mx: "auto",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0",
      marginTop: "3rem",
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
        id="skills"
      ></Box>
      <CustomBox
        sx={{
          my: 5,
          padding: 2,
          mt: 25,
        }}
      >
        <Box
          sx={{
            flex: 1,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 3,
              color: "#00C7FF",
              fontWeight: "bold",
            }}
          >
            SKILLS
          </Typography>
          <Typography variant="h4" sx={{ color: "white", textAlign: "center" }}>
            I have Learn so far.
          </Typography>
        </Box>
        <StackBox>
          <Box
            sx={{
              dsiplay: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {icons.map((ele, i) => {
              if (i < 3) {
                return <Icon key={ele.id} name={ele.name} src={ele.src} />;
              } else {
                return "";
              }
            })}
          </Box>
          <Box
            sx={{
              dsiplay: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {icons.map((ele, i) => {
              if (i >= 3 && i < 6) {
                return <Icon key={ele.id} name={ele.name} src={ele.src} />;
              } else {
                return "";
              }
            })}
          </Box>
          <Box
            sx={{
              dsiplay: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {icons.map((ele, i) => {
              if (i >= 6 && i < 9) {
                return <Icon key={ele.id} name={ele.name} src={ele.src} />;
              } else {
                return "";
              }
            })}
          </Box>
          <Box
            sx={{
              dsiplay: "flex",
              flexDirection: "column",
              alignItems: "center",
            
            }}
          >
            {icons.map((ele, i) => {
              if (i >= 9 && i < 12) {
                return <Icon key={ele.id} name={ele.name} src={ele.src} />;
              } else {
                return "";
              }
            })}
          </Box>
        </StackBox>
      </CustomBox>
    </Box>
  );
};

export default Stack;
