import React from "react";

import { Box, Typography } from "@mui/material";

function Introduction() {
  return (
    <Box style={{ color: "white", maxWidth: "620px" }}>
      <Typography variant="p" style={{textAlign: "center" , fontSize:"18px"}}>
        Hi Everyone, My name is <span>Pandit Gangadhar </span> and I am from{" "}
        <span> Patna, Bihar (India)</span>. I have completed my graduation in
        Physics from <span>Magadh University, Bodhgaya, Bihar. </span>I joined
        full stack development course by{" "}
        <span style={{ color: "rgba(0,199,255,255)" }}>Masai School</span> a
        military type coding school.
      </Typography>
      <Typography variant="h5" style={{ color: "#0088AB", marginTop:"15px"}}>
        Terms That can describe me apart form Coding :
      </Typography>
      <ul>
        <li>
          <Typography className="different">Entrepreneure </Typography>
        </li>
        <li>
          <Typography className="different">Blogger </Typography>
        </li>
        <li>
          <Typography className="different">Exercising </Typography>
        </li>
        <li>
          <Typography className="different">Dancing </Typography>
        </li>
      </ul>
    </Box>
  );
}

export default Introduction;
