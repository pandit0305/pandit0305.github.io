import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Chip from "@mui/material/Chip";
import { Box } from "@mui/system";
import React from "react";


const Project = ({title, description, tags, img, liveVersion, source }) => {
  return (
    <Card sx={{ maxWidth: "330px", margin: "1rem" }}>
        <CardActionArea>
      <a target = {'_blank'} rel="noreferrer" href={liveVersion} style={{textDecoration:"none"}}>
          <CardMedia component="img" image={img} height ="200px"/>
      </a>
          <CardContent>
            <Typography variant="h5" component="div">
              {title}
            </Typography>

            <Typography variant="body" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>


      <CardActions sx={{ display: "flex", flexDirection: "column", marginBottom:"0px"}}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            mx: "auto",
            mb:3
          }}
        >
          <Button
            size="small"
            style={{ backgroundColor: "rgba(1,199,255,255)" }}
            variant="constained"
          >
            <a rel="noreferrer" style={{textDecoration:"none", color:"black", fontWeight:"bold"}} target={'_blank'} href={source}>
              Source Code
            </a>
          </Button>
          <Button
            size="small"
            style={{ backgroundColor: "rgba(0,199,255,255)" }}
            variant="constained"
          >
            <a rel="noreferrer" style={{textDecoration:"none", color:"black", fontWeight:"bold"}} target={'_blank'} href={liveVersion}>
              Visit
            </a>
          </Button>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap:"1rem",
            mb:2,

          }}
          >
          {
            tags.map((ele)=>(
              <Chip label={ele} key ={ele} variant="outlined"/>
            ))
          }
        </Box>
      </CardActions>
    </Card>
  );
};

export default Project;
