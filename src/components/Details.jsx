// noinspection RequiredAttributes

import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";

import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import CloseIcon from "@mui/icons-material/Close";

import { Helmet } from "react-helmet";
import { copyTextToClipboard } from "../services/copy";

import loadGods from "../data/gods";
import loadMonsters from "../data/monsters";
import loadWereMonsters from "../data/were-monsters";

const {
  data: { categories: godsCategories },
} = loadGods();
const {
  data: { categories: monstersCategories },
} = loadMonsters();
const {
  data: { categories: wereMonstersCategories },
} = loadWereMonsters();

const characters = [
  ...godsCategories,
  ...monstersCategories,
  ...wereMonstersCategories,
]
  .map((category) =>
    category.items.map((item) => ({
      ...item,
      pageUrl: `/#/${category.root}/${item.src}`,
      url: `/assets/${category.path}/${item.src}-1.png`,
      urlLow: `/assets/${category.path}/${item.src}-1-1.png`,
      urlSet: `image-set(url("/assets/${category.path}/${item.src}-1-1.png") 1x, url("/assets/${category.path}/${item.src}-1.png") 2x)`,
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
      <Helmet>
        <title>{character.name}</title>
        <meta name="description" content={character.description} />
        <meta property="og:locale" content="be_BY" />
        <meta property="og:title" content={character.name} />
        <meta property="og:description" content={character.description} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://arturbasak.art${character.pageUrl}`}
        />
        <meta
          property="og:image"
          content={`https://arturbasak.art${character.url}`}
        />
      </Helmet>
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
      <DialogContent
        sx={{
          padding: { sm: "20px 24px", xs: "16px 4px" },
          backgroundImage: "none",
          backgroundColor: "#241d25",
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "none",
            backgroundImage: "none",
            backgroundColor: "#241d25",
          }}
        >
          <Box
            sx={{
              minHeight: "436px",
              height: "436px",
              width: "350px",
              maxWidth: "350px",
              backgroundImage: character.urlSet,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              boxShadow: "0px -9px 9px 9px #241d25 inset",
            }}
          />
          <CardContent sx={{ flexGrow: 1, paddingBottom: 0 }}>
            <Typography component="p">
              <div
                dangerouslySetInnerHTML={{ __html: character.description }}
              />
            </Typography>
            <Typography
              component="small"
              variant="body2"
              sx={{ display: "none", marginTop: "16px" }}
            >
              {`Літаратура і крыніцы: ${
                character.source ||
                "Міфалогія беларусаў: Энцыклапедычны слоўнік, Т.Валодзіна, С.Санько, 2011"
              }`}
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
