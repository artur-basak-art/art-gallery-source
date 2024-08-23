import React, { useCallback, useState } from "react";
import { Link as LinkRouter } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Button from "@mui/material/Button";
import { Helmet } from "react-helmet";
import Skeleton from "@mui/material/Skeleton";
import Divider from "@mui/material/Divider";
import Header from "./Header";
import Footer from "./Footer";

export default function ExhibitionsPage() {
  const [isExhibitionPhotoLoading, setExhibitionkPhotoLoading] = useState(true);
  const [isMuseumPhotoLoading, setMuseumPhotoLoading] = useState(true);
  const [isLidaPhotoLoading, setLidaPhotoLoading] = useState(true);

  const handleExhibitionPhotoLoad = useCallback(
    () => setExhibitionkPhotoLoading(false),
    [setExhibitionkPhotoLoading]
  );

  const handleMuseumPhotoLoad = useCallback(
    () => setMuseumPhotoLoading(false),
    [setMuseumPhotoLoading]
  );

  const handleLidaPhotoLoad = useCallback(
    () => setLidaPhotoLoading(false),
    [setLidaPhotoLoading]
  );

  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Артур Басак, мастак-самавук, ілюстратар, праграміст і UI інжынер, які натхняецца беларускiм фальклорам ды народнай дэманалогіяй i стварае вобразы вядомых нячысцікаў з паданняў, міфаў, беларускіх легенд і казак. Працуе ў лічбавым фармаце. Яго малюнкі жыўцом можна пабачыць у Музеі Міфаў Бярэзінскага Запаведніка, Лідскім Замку, а таксама онлайн у Instagram акаунце @belarusian_bogeyfolk"
        />
        <meta property="og:locale" content="be_BY" />
        <meta property="og:title" content="Артур Басак" />
        <meta
          property="og:description"
          content="мастак-самавук, ілюстратар, праграміст і UI інжынер, які натхняецца беларускiм фальклорам ды народнай дэманалогіяй i стварае вобразы вядомых нячысцікаў з паданняў, міфаў, беларускіх легенд і казак. Працуе ў лічбавым фармаце."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://arturbasak.art" />
        <meta
          property="og:image"
          content="https://arturbasak.art/assets/cover2.jpeg"
        />
      </Helmet>
      <Header />
      <main
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: {
              sm: 8,
              xs: "32px",
            },
            pb: {
              sm: 6,
              xs: "8px",
            },
          }}
        >
          <Container
            maxWidth="sm"
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              sx={{
                fontSize: {
                  xs: "24px",
                  sm: "40px",
                },
              }}
            >
              Выставы
            </Typography>
            <Button
              size="small"
              startIcon={<ArrowBackIcon />}
              component={LinkRouter}
              to="/"
            >
              НАЗАД
            </Button>
            <Divider
              sx={{
                width: "100%",
                margin: "32px 0",
                display: { xs: "block", sm: "none" },
              }}
            />
            <Divider
              sx={{
                width: "100%",
                margin: "32px 0",
                display: { xs: "none", sm: "block" },
              }}
            />
            <Typography
              component="h2"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              sx={{
                marginBottom: "18px",
                fontSize: {
                  xs: "16px",
                  sm: "24px",
                },
              }}
            >
              Мастацкая выстава ілюстрацый &laquo;Беларускія&nbsp;Нячысцікі:
              Русалкі&raquo; ЦРіТК г.Наваполацка (Цэнтр рамёстваў і традыцыйнай
              культуры)
            </Typography>
            <iframe
              height="315"
              style={{ width: "100%" }}
              src="https://www.youtube.com/embed/lSO_UPLZ_0o?si=K4SE8bwGPm6vKeac"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <Divider
              sx={{
                width: "100%",
                margin: "32px 0",
                display: { xs: "block", sm: "none" },
              }}
            />
            <Divider
              sx={{
                width: "100%",
                margin: "32px 0",
                display: { xs: "none", sm: "block" },
              }}
            />
            <Typography
              component="h2"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              sx={{
                fontSize: {
                  xs: "16px",
                  sm: "24px",
                },
              }}
            >
              Мастацкая выстава ілюстрацый &laquo;Беларускія&nbsp;Нячысцікі:
              Русалкі&raquo; у межах фестывалю міфалогіі
              &laquo;Шлях&nbsp;Цмока&raquo;
            </Typography>
            {isExhibitionPhotoLoading && (
              <Skeleton
                sx={{
                  margin: "16px 0 32px",
                  width: { xs: "calc(100vw - 32px)", sm: "550px" },
                }}
                variant="rectangular"
                height={550}
                animation="wave"
              />
            )}
            <Box
              component="img"
              src="/assets/exhibition.png"
              alt=""
              onLoad={handleExhibitionPhotoLoad}
              sx={{
                width: "calc(100vw - 32px)",
                height: "auto",
                margin: "16px 0 32px",
                display: isExhibitionPhotoLoading ? "none" : "inherit",
              }}
            />
            <Divider
              sx={{
                width: "100%",
                margin: "32px 0",
                display: { xs: "block", sm: "none" },
              }}
            />
            <Divider
              sx={{
                width: "100%",
                margin: "32px 0",
                display: { xs: "none", sm: "block" },
              }}
            />

            <Typography
              component="h2"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              sx={{
                fontSize: {
                  xs: "16px",
                  sm: "24px",
                },
              }}
            >
              &laquo;Беларускія&nbsp;Нячысцікі&raquo; у пастаяннай экспазіцыі
              &laquo;Музея&nbsp;Міфаў&raquo; Бярэзінскага біясфернага
              запаведніка
            </Typography>
            {isMuseumPhotoLoading && (
              <Skeleton
                sx={{
                  margin: "16px 0 32px",
                  width: { xs: "calc(100vw - 32px)", sm: "550px" },
                }}
                variant="rectangular"
                height={550}
                animation="wave"
              />
            )}
            <Box
              component="img"
              src="/assets/museum.png"
              alt=""
              onLoad={handleMuseumPhotoLoad}
              sx={{
                width: "calc(100vw - 32px)",
                height: "auto",
                margin: "16px 0 32px",
                display: isMuseumPhotoLoading ? "none" : "inherit",
              }}
            />
            <Divider
              sx={{
                width: "100%",
                margin: "32px 0",
                display: { xs: "block", sm: "none" },
              }}
            />
            <Divider
              sx={{
                width: "100%",
                margin: "32px 0",
                display: { xs: "none", sm: "block" },
              }}
            />

            <Typography
              component="h2"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              sx={{
                fontSize: {
                  xs: "16px",
                  sm: "24px",
                },
              }}
            >
              Ілюстрацыя здані ваяра князя Карыбута ў пастаяннай экспазіцыі
              музея Лідскага замка. Выява часам змяняе сваё местазнаходжанне,
              таму яе трэба яшчэ адшукаць пры наведванні замка.
            </Typography>
            {isLidaPhotoLoading && (
              <Skeleton
                sx={{
                  margin: "16px 0 32px",
                  width: { xs: "calc(100vw - 32px)", sm: "550px" },
                }}
                variant="rectangular"
                height={550}
                animation="wave"
              />
            )}
            <Box
              component="img"
              src="/assets/lida-castle.jpeg"
              alt=""
              onLoad={handleLidaPhotoLoad}
              sx={{
                width: "calc(100vw - 32px)",
                maxWidth: "1047px",
                height: "auto",
                margin: "16px 0 32px",
                display: isLidaPhotoLoading ? "none" : "inherit",
              }}
            />
          </Container>
        </Box>
      </main>
      <Footer />
    </div>
  );
}
