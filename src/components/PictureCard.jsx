import React, { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

export default function PictureCard(props) {
  const { pic } = props;
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleCardClick = useCallback(
    () =>
      navigate(`${pathname}/${pic.id}`, {
        state: { prevPath: pathname },
        preventScrollReset: true,
      }),
    [navigate, pathname, pic]
  );

  const imageStyle = {
    height: {
      xs: "auto",
      sm: "338px",
    },
    width: {
      xs: "70%",
      sm: "270px",
    },
  };

  return (
    <Card
      onClick={handleCardClick}
      sx={{
        border: "1px solid transparent",
        "&:hover": {
          border: "1px solid white",
        },
        display: "flex",
        flexDirection: "column",
        alignItems: {
          xs: "center",
          sm: "flex-start",
        },
        boxShadow: "none",
        cursor: "pointer",
      }}
    >
      <CardMedia
        sx={imageStyle}
        component="img"
        decoding="async"
        loading="lazy"
        src={pic.src}
        alt={pic.name}
      />
      <CardContent
        sx={{
          paddingBottom: 0,
          textAlign: {
            xs: "center",
            sm: "left",
          },
        }}
      >
        <Typography
          gutterBottom
          variant="h6"
          component="h2"
          sx={{ fontWeight: "bold" }}
        >
          {pic.name}
        </Typography>
        <Typography
          component="p"
          sx={{
            display: "-webkit-box",
            webkitBoxOrient: "vertical",
            webkitLineClamp: "2",
            overflow: "hidden",
          }}
        >
          <span dangerouslySetInnerHTML={{ __html: pic.description }} />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Чытаць падрабязней</Button>
      </CardActions>
    </Card>
  );
}
