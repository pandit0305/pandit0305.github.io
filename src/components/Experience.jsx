import { Box, Typography } from "@mui/material";
import React from "react";
import { projects } from "../constants/project";
import Project from "./Project";
import Stack from "./Stack";
import Tools from "./Tools";

const Experience = () => {
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
        id="project"
      ></Box>
      <Box sx={{ maxWidth: "1300px", mx: "auto", my: 5,mt:15 }}>
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
          PROJECTS
        </Typography>
        <Typography
          variant="h4"
          sx={{ color: "white", textAlign: "center", mb: 5, fontFamily: 'Lorem'}}
        >
          Let's take a look at what I've{" "}
          <span style={{ color: "rgba(0,199,255,255)" }}>built</span> so far.
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
        >
          {projects.map((ele) => (
            <Project
              key={ele.id}
              title={ele.title}
              description={ele.description}
              tags={ele.tags}
              img={ele.image}
              liveVersion={ele.liveVersion}
              source={ele.source}
            />
          ))}
        </Box>
        <Box>
        <Stack />
        </Box>
        <Box>
          <Tools/>
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
