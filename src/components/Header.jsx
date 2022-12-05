import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import ButtonGroup from "@mui/material/ButtonGroup";
import Tooltip from "@mui/material/Tooltip";

// import BrushIcon from "@mui/icons-material/Brush";
// import ColorLensIcon from "@mui/icons-material/ColorLens";
import MoreIcon from "@mui/icons-material/MoreVert";
import InstagramIcon from "@mui/icons-material/Instagram";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

const navItems = [
  {
    name: "ГАЛОЎНАЯ",
    to: "/",
  },
  {
    name: "НЯЧЫСЦІКІ",
    to: "/monsters",
  },
  {
    name: "БАГІ",
    to: "/gods",
  },
];

function SocialMedia({ color }) {
  return (
    <ButtonGroup sx={{ display: "flex" }}>
      <Tooltip title="Instagram">
        <IconButton
          variant="outlined"
          component="a"
          href="https://www.instagram.com/belarusian_monsters"
          target="_blank"
        >
          <InstagramIcon htmlColor={color} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Patreon">
        <IconButton
          variant="outlined"
          component="a"
          href="https://www.patreon.com/belarusian_monsters"
          target="_blank"
        >
          <VolunteerActivismIcon htmlColor={color} />
        </IconButton>
      </Tooltip>
    </ButtonGroup>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const openMobileMenu = useCallback(
    () => setMobileMenuOpen(true),
    [setMobileMenuOpen]
  );
  const closeMobileMenu = useCallback(
    () => setMobileMenuOpen(false),
    [setMobileMenuOpen]
  );

  return (
    <AppBar component="nav" position="sticky">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box
          component="div"
          sx={{ display: "flex", alignItems: "center", marginRight: "16px" }}
        >
          <Button component={Link} to="/" sx={{ color: "#fff" }}>
            {/* <BrushIcon /> */}
            <Box
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{ margin: "0 16px", lineHeight: 1 }}
              >
                ARTUR BASAK
              </Typography>
              <Typography component="div" sx={{ fontSize: "10px" }}>
                Gallery
              </Typography>
            </Box>
            {/* <ColorLensIcon /> */}
          </Button>
          <Box component="nav" sx={{ display: { xs: "none", sm: "flex" } }}>
            {navItems.map((item) => (
              <React.Fragment key={item.name}>
                <Divider
                  light
                  sx={{ bgcolor: "gray" }}
                  orientation="vertical"
                  variant="middle"
                  flexItem
                />
                <Button component={Link} to={item.to} sx={{ color: "#fff" }}>
                  {item.name}
                </Button>
              </React.Fragment>
            ))}
          </Box>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          <SocialMedia color="#FFF" />
        </Box>
        <IconButton
          size="large"
          aria-label="display more actions"
          sx={{ display: { xs: "inherit", sm: "none" } }}
          edge="end"
          color="inherit"
          onClick={openMobileMenu}
        >
          <MoreIcon />
        </IconButton>
      </Toolbar>
      <Drawer anchor="right" open={isMobileMenuOpen} onClose={closeMobileMenu}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "40px 32px",
          }}
        >
          {navItems.map((item) => (
            <React.Fragment key={item.name}>
              <Divider variant="middle" flexItem sx={{ margin: "16px 0" }} />
              <Button component={Link} to={item.to}>
                {item.name}
              </Button>
            </React.Fragment>
          ))}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "60px",
            }}
          >
            <SocialMedia color="secondary" />
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}
