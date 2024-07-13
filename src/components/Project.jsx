import React from "react";
import {
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

const Project = ({ title, description, tags, img, liveVersion, source }) => {
  const CustomCard = styled(CardMedia)(() => ({
    border: "5px solid #00C7FF",
    borderRadius: "10px",
    height: "200px",
    maxWidth: "320px",
    transition: "all 0.5s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
      boxShadow: "#00C7FF 0px 5px 15px",
    },
  }));

  const BigCard = styled(CardMedia)(() => ({
    maxWidth: "330px",
    margin: "1rem",
    color: "white",
    border: "1px solid white",
    borderRadius: "10px",
    transition: "all 0.5s ease-in-out",
    "&:hover": {
      transform: "scale(1.0)",
      boxShadow: "#00C7FF 0px 5px 15px",
    },
  }));

  return (
    <BigCard>
      <CardActionArea>
        <a
          target={"_blank"}
          rel="noreferrer"
          href={liveVersion}
          style={{ textDecoration: "none" }}
        >
          <CustomCard component="img" image={img} />
        </a>
        <CardContent>
          <Typography variant="h5" component="div" sx={{fontFamily: 'Lorem'}}>
            {title}
          </Typography>

          <Typography variant="body" color="white" sx={{ paddingTop: "5px",fontFamily: 'Lorem',fontSize:"16px" }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions
        sx={{ display: "flex", flexDirection: "column", marginBottom: "0px" }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            mx: "auto",
            mb: 3,
          }}
        >
          <Button
            size="small"
            variant="constained"
            sx={{
              backgroundColor: "rgba(1,199,255,255)",
              transition: "all 0.5s ease-in-out",
              "$:hover": {
                transform: "scale(1.1)",
                border: "3px solid white",
                backgroundColor: "transparent",
              },
            }}
          >
            <a
              rel="noreferrer"
              style={{
                fontFamily: 'Lorem',
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
              target={"_blank"}
              href={source}
            >
              Source Code
            </a>
          </Button>
          <Button
            size="small"
            variant="constained"
            sx={{
              backgroundColor: "rgba(1,199,255,255)",
              transition: "all 0.5s ease-in-out",
              "$:hover": {
                transform: "scale(1.1)",
                border: "1px solid white",
                backgroundColor: "white",
              },
            }}
          >
            <a
              rel="noreferrer"
              style={{
                fontFamily: 'Lorem',
                textDecoration: "none",
                color:"white",
                fontWeight: "bold",
              }}
              target={"_blank"}
              href="#"
            >
              Live
            </a>
          </Button>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "1rem",
            mb: 2,
          }}
        >
          {tags.map((ele) => (
            <Chip
              label={ele}
              key={ele}
              variant="outlined"
              sx={{ color: "white" }}
            />
          ))}
        </Box>
      </CardActions>
    </BigCard>
  );
};

export default Project;
