import React from "react";

import { Box, Typography } from "@mui/material";

function Introduction() {
  return (
    <Box style={{ color: "white", maxWidth: "620px", fontFamily:"Lorem" }}>
      <Typography variant="p" style={{textAlign: "center" , fontSize:"18px"}}>
        Hi Everyone, My name is <span>Pandit Gangadhar </span> and I am from{" "}
        <span> Patna, Bihar (India)</span>. I have completed my graduation in
        Physics from <span>Magadh University, Bodhgaya, Bihar. </span>I joined
        full stack development course by{" "}
        <span style={{ color: "rgba(0,199,255,255)" }}>Masai School</span> a
        military type coding school.
      </Typography>
      <Typography variant="h5" style={{ color: "#0088AB", marginTop:"15px", fontFamily:"Lorem"}}>
        Terms That can describe me apart form Coding :
      </Typography>
      <ul>
        {/* <li>
          <Typography className="different" style={{fontFamily:"Lorem"}}>Entrepreneure </Typography>
        </li> */}
        <li>
          <Typography className="different" style={{fontFamily:"Lorem"}}>Blogger </Typography>
        </li>
        <li>
          <Typography className="different" style={{fontFamily:"Lorem"}}>Exercising </Typography>
        </li>
        <li>
          <Typography className="different" style={{fontFamily:"Lorem"}}>Dancing </Typography>
        </li>
      </ul>
    </Box> 
  );
}

export default Introduction;
