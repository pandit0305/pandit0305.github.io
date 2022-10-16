import { Box, Typography } from "@mui/material";
import React from "react";



const Icon = ({name, src}) => {

  return (
    <>
      <Box 
      sx={{display:"flex",
      flexDirection:"column",
      alignItems:"center",
      mb:3,
      border:"1px solid white",
      maxWidth:"200px",
      maxHeight:"200px",
      padding:"5px",
      borderRadius:"5px",
    }}
      >
        <img src={src} height="40px" width="40px" alt="icon-logo"/>
        <Typography variant ="body1" sx={{color:"white", mt:1}}>
          {name}
        </Typography>
      </Box>
    </>
  );
};

export default Icon;
