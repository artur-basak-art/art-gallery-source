import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const [isLoading, setLoading] = useState(true);

  const handleClose = () => {
    navigateTo(-1);
    return onClose && onClose();
  };

  const handlePrint = () => {
    const url = "about:blank";
    const pwa = window.open(url, "_new");
    pwa.document.open();
    pwa.document.write(ImagePrint("https://picsum.photos/1200/3000"));
    pwa.document.close();
  };

  const handleCopy = () =>
    copyTextToClipboard("https://picsum.photos/1200/3000");

  return (
    <Dialog onClose={handleClose} open='true'>
      <DialogTitle sx={{ textAlign: "center" }}>
        Lorem ipsum text
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
      <DialogContent>
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
              width={270}
              height={338}
              animation="wave"
            />
          )}
          <CardMedia
            sx={{
              minHeight: "336px",
              height: "338px",
              width: "270px",
              maxWidth: "270px",
              display: isLoading ? "none" : "inherit",
            }}
            component="img"
            src="https://picsum.photos/1200/3000"
            onLoad={() => setLoading(false)}
            alt="random"
          />
          <CardContent sx={{ flexGrow: 1, paddingBottom: 0 }}>
            <Typography component="p">
              Lorem ipsum description lorem ipsum description lorem ipsum ipsum
              description lorem ipsum description lorem ipsum ipsum description
              lorem ipsum description lorem ipsum ipsum description lorem ipsum
              description lorem ipsum ipsum description lorem ipsum description
              lorem ipsum ipsum description lorem ipsum description lorem ipsum
            </Typography>
            <Typography component="small" variant='body2' sx={{ display: 'inline-block', marginTop: '16px' }}>
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
          <IconButton sx={{ display: { xs: 'none', sm: 'inherit' } }} variant="outlined" onClick={handlePrint}>
            <PrintIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Download">
          <IconButton
            sx={{ marginLeft: "8px" }}
            variant="outlined"
            component="a"
            href="https://picsum.photos/1200/3000"
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
