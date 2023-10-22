import React from "react";
import { Typography, Box, styled } from "@mui/material";
import Image from "mui-image";
import Calendar from "./Calendar";
// import { icons } from "../constants/icons";
// import Icon from "./Icon";

function Stats() {
  const CustomBox = styled(Box)(() => ({
    maxWidth: "1300px",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "center",
    mx: "auto",
    margin: "auto",
  }));
  const SmallBox = styled(Box)(({ theme }) => ({
    maxWidth: "1300px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    mx: "auto",
    margin: "auto",
    gap: "10px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  }));
  const GraphBox = styled(Box)(({ theme }) => ({
    maxWidth: "1300px",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "center",
    mx: "auto",
    margin: "auto",
  }));

  // const GraphBox1 = styled(Box)(({ theme }) => ({
  //   maxWidth: "1300px",
  //   display: "flex",
  //   flexWrap: "wrap",
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   mx: "auto",
  //   margin: "auto",
  // }));

  const GitImage = styled(Image)(({ theme }) => ({
    maxWidth: "500px",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    [theme.breakpoints.down("md")]: {
      maxWidth: "300px",
    },
  }));
  // const GitImage1 = styled(Image)(({ theme }) => ({
  //   maxWidth: "900px",
  //   height: "200px",
  //   display: "flex",
  //   flexDirection: "column",
  //   flexWrap: "wrap",
  //   [theme.breakpoints.down("md")]: {
  //     maxWidth: "300px",
  //   },
  // }));
  return (
    <>
      <Box
        style={{
          height: "1px",
          backgroundColor: "#00C7FF",
          width: "100%",
          border: 0,
          borderRadius: "25px",
        }}
      ></Box>
      <Box sx={{height:"50px"}}></Box>
      <CustomBox>
        <CustomBox style={{ color: "white" }}>
          <Typography
            variant="h3"
            sx={{
              color: "#00C7FF",
              fontWeight: "bold",
              textAlign: "center",
              mb: 5,
              fontFamily: 'Lorem'
            }}
          >
            GITHUB <span style={{ color: "white" }}>STATS</span>
          </Typography>
        </CustomBox>
        <SmallBox>
          <GraphBox>
            <p>
              <GitImage
                src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=pandit0305&theme=dracula"
                alt="pandit0305"
              />
            </p>
          </GraphBox>

          <GraphBox>
            <p>
              &nbsp;
              <GitImage
                margin-Top="5px"
                src="https://github-readme-stats.vercel.app/api?username=pandit0305&show_icons=true&locale=en&theme=dracula"
                alt="pandit0305"
              />
            </p>
          </GraphBox>
        </SmallBox>

        <CustomBox>
          <p>
            <GitImage
              src="https://github-readme-streak-stats.herokuapp.com/?user=pandit0305&theme=dracula"
              alt="pandit0305"
            />
          </p>
        </CustomBox>
{/* 
        <GraphBox1>
          <a href="https://github.com/pandit0305/">
            <GitImage1
              alt="Pandit Gangadhar's Activity Graph"
              src="https://denvercoder1-activity-graph.herokuapp.com/graph/?username=pandit0305&bg_color=1F222E&color=F8D866&line=F85D7F&point=FFFFFF&hide_border=true"
            />
          </a>
        </GraphBox1> */}

        <CustomBox>
          <p>
            <a href="https://github.com/pandit0305">
              <span>
                <GitImage src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=pandit0305&theme=dracula" />
              </span>
            </a>{" "}
          </p>
        </CustomBox>
        <Box>
          <Calendar />
        </Box>
      </CustomBox>
    </>
  );
}

export default Stats;
