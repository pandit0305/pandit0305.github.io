import { Box, Typography } from "@mui/material";
import React from "react";
import { projects } from "../constants/project";
import Project from "./Project";
import Stack from "./Stack";


const Experience = () => {
  return (
    <>
      <Box sx={{maxWidth:"1300px", mx:"auto", my:5}} id="project">
      <Typography variant="h3" sx={{color:"#00C7FF",fontWeight:"bold", textAlign:"center", mb:5}}> 
            PROJECTS
        </Typography>
        <Typography variant="h4" sx={{color:"white", textAlign:"center", mb:5}}> 
            Let's take a look at what I've <span style={{color:"rgba(0,199,255,255)"}}>
              built
            </span> so far.
        </Typography>
      <Box sx={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
        {
          projects.map((ele)=>(
            <Project 
            key={ele.id} 
            title={ele.title}
            description={ele.description}
            tags={ele.tags}
            img={ele.image}
            liveVersion={ele.liveVersion}
            source={ele.source}
            />
          ))
        }
      </Box>
      <Stack/>
      </Box>
    </>
  );
};

export default Experience;
