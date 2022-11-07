// noinspection RequiredAttributes

import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Skeleton from "@mui/material/Skeleton";
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";

import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import CloseIcon from "@mui/icons-material/Close";

import { copyTextToClipboard } from "../services/copy";

import loadGods from "../data/gods";
import loadMonsters from "../data/monsters";

const {
  data: { categories: godsCategories },
} = loadGods();
const {
  data: { categories: monstersCategories },
} = loadMonsters();
const characters = [...godsCategories, ...monstersCategories]
  .map((category) =>
    category.items.map((item) => ({
      ...item,
      url: `/assets/${category.path}/${item.src}-1.png`,
    }))
  )
  .flat();

function ImagePrint(source) {
  return `
    <html lang="en">
        <head>
            <title>Print image</title>
            <script>
                function step1(){
                    setTimeout('step2()', 10);
                }
                function step2(){
                    window.print();window.close();
                }
            </script>
        </head>
        <body onload='step1()'>
            <img src="${source}" alt="" />
        </body>
    </html>
`;
}

export default function Details(props) {
  const { onClose } = props;
  const navigateTo = useNavigate();
  const { characterId } = useParams();
  const character = characters.find((c) => c.src === characterId);
  const [isLoading, setLoading] = useState(true);

  const handleClose = () => {
    navigateTo(-1);
    return onClose && onClose();
  };

  const handleDownload = () => {
    window?.dataLayer?.push({ event: "download" });
  };

  const handlePrint = () => {
    window?.dataLayer?.push({ event: "print" });
    const url = "about:blank";
    const pwa = window.open(url, "_new");
    pwa.document.open();
    pwa.document.write(ImagePrint(character.url));
    pwa.document.close();
  };

  const handleCopy = () => {
    window?.dataLayer?.push({ event: "copy" });
    copyTextToClipboard(document.URL);
  };

  return (
    <Dialog onClose={handleClose} open>
      <DialogTitle sx={{ textAlign: "center" }}>
        {character.name}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ padding: { sm: "20px 24px", xs: "16px 4px" } }}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "none",
          }}
        >
          {isLoading && (
            <Skeleton
              variant="rectangular"
              width={350}
              height={436}
              animation="wave"
            />
          )}
          <CardMedia
            sx={{
              minHeight: "436px",
              height: "436px",
              width: "350px",
              maxWidth: "350px",
              display: isLoading ? "none" : "inherit",
            }}
            component="img"
            src={character.url}
            onLoad={() => setLoading(false)}
            alt="random"
          />
          <CardContent sx={{ flexGrow: 1, paddingBottom: 0 }}>
            <Typography component="p">{character.description}</Typography>
            <Typography
              component="small"
              variant="body2"
              sx={{ display: "inline-block", marginTop: "16px" }}
            >
              Lorem ipsum description lorem ipsum description lorem ipsum
            </Typography>
          </CardContent>
        </Card>
      </DialogContent>
      <DialogActions sx={{ padding: "16px" }}>
        <Tooltip title="Copy">
          <IconButton variant="outlined" onClick={handleCopy}>
            <CopyIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Print">
          <IconButton
            sx={{ display: { xs: "none", sm: "inherit" } }}
            variant="outlined"
            onClick={handlePrint}
          >
            <PrintIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Download" onClose={handleDownload}>
          <IconButton
            sx={{ marginLeft: "8px" }}
            variant="outlined"
            component="a"
            href={character.url}
            target="_blank"
            download
          >
            <SaveIcon />
          </IconButton>
        </Tooltip>
      </DialogActions>
    </Dialog>
  );
}
