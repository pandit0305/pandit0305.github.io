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
import { Link } from "react-scroll";

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Box style={{ border: "1px solid white", borderRadius: "10px" }}>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
          <Box style={{height:"100%", backgroundColor: "rgba(0, 10, 31, 255)"}}>
          <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      textAlign:"center",
                      flexGrow: 1,
                      fontWeight: "bold",
                      fontFamily: "Brush Script MT, Brush Script Std, cursive",
                      fontSize: "30px",
                      border:"1px solid white",
                      borderLeft:"none",
                      borderRight:"none",
                      color: "rgba(0,199,255,255)",
                    }}
                  >
                    Pandit
                    
                  </Typography>
            <List
              sx={{ mt: 1, ml:1, p:2 }}
              
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
                    href="https://drive.google.com/file/d/1vzK7oPvQh9p2MdIso9_nBwTDN0ZTLrsj/view?usp=share_link"
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
        <Box>
          <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
            <MenuIcon sx={{ color: "white", fontSize: "22px"}} />
          </IconButton>

        </Box>
      </Box>
    </React.Fragment>
  );
}

export default DrawerComponent;
