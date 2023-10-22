import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactToolTip from "react-tooltip"
import { Typography, Box, styled } from "@mui/material";
// import Image from 'mui-image';

// const selectLastHalfYear = contributions => {
//     const currentYear = new Date().getFullYear();
//     const currentMonth = new Date().getMonth();
//     const shownMonths = 6;
  
//     return contributions.filter(day => {
//       const date = new Date(day.date);
//       const monthOfDay = date.getMonth();
  
//       return (
//         date.getFullYear() === currentYear &&
//         monthOfDay > currentMonth - shownMonths &&
//         monthOfDay <= currentMonth
//       );
//     });
//   };

function Calendar() {

  const CustomBox = styled(Box)(({ theme }) => ({
    maxWidth: "1300px",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "center",
    mx: "auto",
    margin: "auto",
    color: "white",
    mb: 5,
    [theme.breakpoints.down("md")]: {
        ml:5
    },
    [theme.breakpoints.down("sm")]: {
        ml:10
    }
  }));
  const GithubBox = styled(Box)(() => ({
    maxWidth: "1300px",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "center",
    mx: "auto",
    margin: "auto",
    color: "white",
    alignItems:"center"
  }));
  return (
    <CustomBox>
      <Typography
        variant="h3"
        sx={{
          color: "#00C7FF",
          fontWeight: "bold",
          textAlign: "center",
          mb: 5,
          mt: 3,
          fontFamily: 'Lorem'
        }}
      >
        GITHUB <span style={{ color: "white" }}>CALENDAR</span>
      </Typography>
      <GithubBox>
        <GitHubCalendar
        sx={{margin:"auto"}}
          username="pandit0305"
          showWeekdayLabels={true}
          // transformData={selectLastHalfYear} 
          blockSize={10}
         blockRadius="50%"
        color="#00C7FF"
        fontSize={15}
        >

          <ReactToolTip delayHide={20} html/>

        </GitHubCalendar>
      </GithubBox>
    </CustomBox>
  );
}

export default Calendar;


