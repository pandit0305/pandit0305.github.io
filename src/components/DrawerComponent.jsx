import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HouseIcon from "@mui/icons-material/House";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  Box,
  Typography,
} from "@mui/material";
import { Link } from "react-scroll";

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Box style={{ border: "1px solid white", borderRadius: "10px" }}>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
          <Box
            style={{ height: "100%", backgroundColor: "rgba(0, 10, 31, 255)"}}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                textAlign: "center",
                flexGrow: 1,
                fontWeight: "bold",
                fontFamily: "Brush Script MT, Brush Script Std, cursive",
                fontSize: "30px",
                border: "1px solid white",
                borderLeft: "none",
                borderRight: "none",
                color: "rgba(0,199,255,255)",
              }}
            >
              Pandit
            </Typography>
            <List sx={{ mt: 1, ml: 1, p: 2 }}>
              <ListItemButton>
                <ListItemIcon>
                  <Link to="home" className="link" smooth>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between", width:"90px" }}
                    >
                      <HouseIcon sx={{ color: "rgba(0,199,255,255)" }} />
                      <Typography
                        style={{
                          borderBottom: "1px solid #00C7FF",
                          color: "white",
                          fontWeight: "bold",
                          fontFamily: '"Lorem", serif' 
                        }}
                      >
                        HOME
                      </Typography>
                    </Box>
                  </Link>
                </ListItemIcon>
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <Link to="about" className="link" smooth>
                    <Box sx={{ display: "flex", justifyContent: "space-between", width:"100px" }}>
                      <AssignmentIndIcon sx={{ color: "rgba(0,199,255,255)" }} />
                      <Typography sx={{ fontWeight: "bold", color: "white" , fontFamily: '"Lorem", serif' }}>
                        ABOUT
                      </Typography>

                    </Box>
                  </Link>
                </ListItemIcon>
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <Link to="contact" className="link" smooth>
                    <Box sx={{ display: "flex", justifyContent: "space-between", width:"120px" }}>
                      <ContactPageIcon sx={{ color: "rgba(0,199,255,255)" }}/>
                      <Typography sx={{ color: "white", fontWeight: "bold",  fontFamily: '"Lorem", serif'  }}>
                        CONTACT
                      </Typography>
                    </Box>
                  </Link>
                </ListItemIcon>
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <Link to="project" className="link" smooth>
                    <Box sx={{ display: "flex", justifyContent: "space-between", width:"120px" }}>
                      <FeaturedPlayListIcon sx={{ color: "rgba(0,199,255,255)" }}/>
                      <Typography sx={{ color: "white", fontWeight: "bold", fontFamily: '"Lorem", serif'}}>
                        PROJECT
                      </Typography>
                    </Box>
                  </Link>
                </ListItemIcon>
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <Link to="skills" className="link" smooth>
                    <Box sx={{ display: "flex", justifyContent: "space-between", width:"90px" }}>
                      <EmojiEventsIcon sx={{ color: "rgba(0,199,255,255)" }}/>
                      <Typography sx={{ color: "white", fontWeight: "bold",  fontFamily: '"Lorem", serif' }}>
                        SKILL
                      </Typography>
                    </Box>
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
                    <Box sx={{ display: "flex", justifyContent: "space-between", width:"110px" }}>
                    <DocumentScannerIcon sx={{ color: "rgba(0,199,255,255)" }}/>
                                                           
                    <Typography sx={{ color: "white", fontWeight: "bold",  fontFamily: '"Lorem", serif' }}>
                      RESUME
                    </Typography>
                    </Box>
                  </a>
                </ListItemIcon>
              </ListItemButton>
            </List>
          </Box>
        </Drawer>
        <Box>
          <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
            <MenuIcon sx={{ color: "white", fontSize: "22px" }} />
          </IconButton>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default DrawerComponent;
