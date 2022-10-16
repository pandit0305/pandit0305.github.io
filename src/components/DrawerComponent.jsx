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
      <Box>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
          <List sx={{ textAlign: "center" }}>
            <Box
              component="img"
              sx={{
                maxHeight: "45px",
                maxWidth: "45px",
                objectFit: "cover",
              }}
              src={navIcon}
            />
            <ListItemButton>
              <ListItemIcon>
                <Link to="home" className="link" smooth>
                  <Typography
                    sx={{
                      borderBottom: "1px solid #00C7FF",
                      color: "black",
                      fontWeight: "bold",
                      ml: "10px",
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
                  <Typography sx={{ color: "black", fontWeight: "bold" }}>
                    ABOUT
                  </Typography>
                </Link>
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <Link to="contact" className="link" smooth>
                  <Typography sx={{ color: "black", fontWeight: "bold" }}>
                    CONTACT
                  </Typography>
                </Link>
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <Link to="project" className="link" smooth>
                  <Typography sx={{ color: "black", fontWeight: "bold" }}>
                    PROJECT
                  </Typography>
                </Link>
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <Link to="skills" className="link" smooth>
                  <Typography sx={{ color: "black", fontWeight: "bold" }}>
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
                  <Typography sx={{ color: "black", fontWeight: "bold" }}>
                    RESUME
                  </Typography>
                </a>
              </ListItemIcon>
            </ListItemButton>
          </List>
        </Drawer>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
          <MenuIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>
    </React.Fragment>
  );
}

export default DrawerComponent;
