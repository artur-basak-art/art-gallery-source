import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import EmailIcon from "@mui/icons-material/Email";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import RefreshScroll from "./RefreshScroll";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      All images copyright © Name. All rights reserved.
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        p: 6,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      component="footer"
    >
      <ButtonGroup sx={{ marginBottom: "16px" }}>
        <Tooltip title="Instagram">
          <IconButton
            variant="outlined"
            component="a"
            href="https://instagram.com"
            target="_blank"
          >
            <InstagramIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Telegram">
          <IconButton
            variant="outlined"
            component="a"
            href="https://instagram.com"
            target="_blank"
          >
            <TelegramIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Facebook">
          <IconButton
            variant="outlined"
            component="a"
            href="https://instagram.com"
            target="_blank"
          >
            <FacebookIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Pinterest">
          <IconButton
            variant="outlined"
            component="a"
            href="https://instagram.com"
            target="_blank"
          >
            <PinterestIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Write email">
          <IconButton
            variant="outlined"
            component="a"
            href="mailto:artur.basak.devingrodno@gmail.com"
            target="_blank"
          >
            <EmailIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Patreon">
          <IconButton
            variant="outlined"
            component="a"
            href="https://instagram.com"
            target="_blank"
          >
            <VolunteerActivismIcon />
          </IconButton>
        </Tooltip>
      </ButtonGroup>
      <Copyright />
      <RefreshScroll />
    </Box>
  );
}
