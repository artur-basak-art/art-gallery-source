import React, { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

export default function PictureCard(props) {
  const { pic } = props;
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const handleImageLoad = useCallback(() => setLoading(false), [setLoading]);
  const handleCardClick = useCallback(
    () =>
      navigate(`${pathname}/${pic.id}`, {
        state: { prevPath: pathname },
        preventScrollReset: true,
      }),
    [navigate, pathname, pic]
  );

  const commonStyle = {
    height: {
      xs: "auto",
      sm: "338px",
    },
    width: {
      xs: "100vw",
      sm: "270px",
    },
  };
  const imageStyle = {
    ...commonStyle,
    display: isLoading ? "none" : "inherit",
  };

  return (
    <Card
      onClick={handleCardClick}
      sx={{
        height: {
          xs: "inherit",
          sm: "520px",
        },
        display: "flex",
        flexDirection: "column",
        boxShadow: "none",
        cursor: "pointer",
      }}
    >
      {isLoading && (
        <Skeleton
          sx={{ ...commonStyle, height: "338px", bgcolor: "#241d25" }}
          variant="rectangular"
          animation="wave"
        />
      )}
      <CardMedia
        sx={imageStyle}
        component="img"
        onLoad={handleImageLoad}
        onError={handleImageLoad}
        src={pic.src}
        alt={pic.name}
      />
      <CardContent sx={{ flexGrow: 1, paddingBottom: 0 }}>
        <Typography gutterBottom variant="h6" component="h2">
          {pic.name}
        </Typography>
        <Typography component="p">{pic.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Чытаць падрабязней</Button>
      </CardActions>
    </Card>
  );
}
