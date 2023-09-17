import { Box, Typography } from "@mui/material";
import React from "react";

const IconTools = ({ name, src }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 2,
          border: "1px solid white",
          width: "80px",
          height: "80px",
          padding: "5px",
          borderRadius: "5px",
          transition: "all 0.5s ease-in-out",
          "&:hover": {
            transform: "scale(1.1)",
            boxShadow: "#00C7FF 0px 5px 15px",
          },
        }}
      >
        <img src={src} height="40px" width="40px" alt="icon-logo" />
        <Typography variant="body1" sx={{ color: "white", mt: 1,fontFamily: 'Lorem' }}>
          {name}
        </Typography>
      </Box>
    </>
  );
};

export default IconTools;
