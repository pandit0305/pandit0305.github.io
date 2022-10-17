import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  Box,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import navIcon from "../media/mylogo.png";
import { Link } from "react-scroll";

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Box style={{ border: "1px solid white", borderRadius: "10px" }}>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
          <Box style={{height:"100%", backgroundColor: "rgba(0, 10, 31, 255)"}}>
            <Box
              component="img"
              sx={{
                maxHeight: "45px",
                maxWidth: "45px",
                objectFit: "cover",
                position:"fixed",
                top:"30px",
                left:"50px"
              }}
              src={navIcon}
            />
            <List
              sx={{ mt: 12, ml:1, p:2 }}
              
            >
              <ListItemButton>
                <ListItemIcon>
                  <Link to="home" className="link" smooth>
                    <Typography
                      sx={{
                        borderBottom: "1px solid #00C7FF",
                        color:"white",
                        fontWeight: "bold",
                  
                      }}
                    >
                      HOME
                    </Typography>
                  </Link>
                </ListItemIcon>
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <Link to="about" className="link" smooth>
                    <Typography sx={{fontWeight: "bold" , color:"white"}}>
                      ABOUT
                    </Typography>
                  </Link>
                </ListItemIcon>
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <Link to="contact" className="link" smooth>
                    <Typography sx={{ color:"white", fontWeight: "bold" }}>
                      CONTACT
                    </Typography>
                  </Link>
                </ListItemIcon>
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <Link to="project" className="link" smooth>
                    <Typography sx={{ color: "white", fontWeight: "bold" }}>
                      PROJECT
                    </Typography>
                  </Link>
                </ListItemIcon>
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <Link to="skills" className="link" smooth>
                    <Typography sx={{ color: "white", fontWeight: "bold" }}>
                      SKILL
                    </Typography>
                  </Link>
                </ListItemIcon>
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <a
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: "white" }}
                    target={"_blank"}
                    href="https://drive.google.com/file/d/1vzK7oPvQh9p2MdIso9_nBwTDN0ZTLrsj/view?usp=sharing"
                  >
                    <Typography sx={{ color: "white", fontWeight: "bold" }}>
                      RESUME
                    </Typography>
                  </a>
                </ListItemIcon>
              </ListItemButton>
            </List>
          </Box>
        </Drawer>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
          <MenuIcon sx={{ color: "white", fontSize: "22px" }} />
        </IconButton>
      </Box>
    </React.Fragment>
  );
}

export default DrawerComponent;
