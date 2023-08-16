import React from "react";
import { ScrollRestoration } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import EmailIcon from "@mui/icons-material/Email";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      All images copyright © Artur Basak (@belarusian_monsters). All rights reserved.
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
            href="https://www.instagram.com/belarusian_monsters"
            target="_blank"
          >
            <InstagramIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Telegram">
          <IconButton
            variant="outlined"
            component="a"
            href="https://t.me/belarusian_monsters"
            target="_blank"
          >
            <TelegramIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Facebook">
          <IconButton
            variant="outlined"
            component="a"
            href="https://www.facebook.com/basak.artur"
            target="_blank"
          >
            <FacebookIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Twitter">
          <IconButton
            variant="outlined"
            component="a"
            href="https://twitter.com/belarusian_mons"
            target="_blank"
          >
            <TwitterIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Pinterest">
          <IconButton
            variant="outlined"
            component="a"
            href="https://www.pinterest.com/arturbasak/belarusian-monsters-%D0%B1%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D0%BAi%D1%8F-%D0%BD%D1%8F%D1%87%D1%8B%D1%81%D1%86i%D0%BAi/"
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
      </ButtonGroup>
      <Copyright />
      <ScrollRestoration />
    </Box>
  );
}
