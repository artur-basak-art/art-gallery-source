import React, { useCallback, useState } from "react";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Button from "@mui/material/Button";
import MUILink from "@mui/material/Link";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";

export default function MainPage() {
  const [isAuthorPhotoLoading, setAuthorPhotoLoading] = useState(true);
  const [isBookPhotoLoading, setBookPhotoLoading] = useState(true);
  const handleAuthorPhotoLoad = useCallback(
    () => setAuthorPhotoLoading(false),
    [setAuthorPhotoLoading]
  );
  const handleBookPhotoLoad = useCallback(
    () => setBookPhotoLoading(false),
    [setBookPhotoLoading]
  );

  return (
    <div>
      <Header />
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
              variant="h5"
              align="left"
              sx={{
                maxWidth: "286px",
                marginTop: { xs: "32px", sm: "inherit" },
                display: { xs: "none", md: "flex" },
                marginBottom: "16px",
              }}
              color="text.secondary"
              paragraph
            >
              ГАЛЕРЭІ ІЛЮСТРАЦЫЙ
            </Typography>
            <Box
              sx={{
                alignItems: "center",
                justifyContent: "even-space",
                display: { xs: "none", md: "flex" },
              }}
            >
              <Link to="/monsters">
                <div className="card">
                  <div className="wrapper">
                    <img
                      src="assets/forest/Hajouka-1.png"
                      className="cover-image"
                      alt=""
                      role="presentation"
                    />
                  </div>
                  <img
                    src="assets/monsters-text.png"
                    className="title"
                    alt="Беларускія нячысцікі"
                  />
                  <img
                    src="assets/Hajouka-removebg-preview.png"
                    className="character"
                    role="presentation"
                    style={{
                      filter: "drop-shadow(0px 8px 15px black) brightness(1.1)",
                      height: "300px",
                      width: "auto",
                    }}
                    alt=""
                  />
                </div>
              </Link>
              <Link to="/gods">
                <div className="card">
                  <div className="wrapper">
                    <img
                      src="assets/gods/God-1.png"
                      className="cover-image"
                      role="presentation"
                      alt=""
                    />
                  </div>
                  <img
                    src="assets/gods-text.png"
                    className="title"
                    alt="Паганскія багі"
                    style={{
                      height: "40px",
                      width: "auto",
                    }}
                  />
                  <img
                    src="assets/God-removebg-preview.png"
                    className="character"
                    role="presentation"
                    alt=""
                  />
                </div>
              </Link>
              <Link to="/ghosts">
                <div className="card">
                  <div className="wrapper">
                    <img
                      src="assets/ghosts/belaja-panna-mirskaja-1.png"
                      className="cover-image"
                      role="presentation"
                      alt=""
                    />
                  </div>
                  <img
                    src="assets/zdani-text.png"
                    className="title"
                    alt="Беларускія здані"
                    style={{
                      height: "40px",
                      width: "auto",
                    }}
                  />
                  <img
                    src="assets/belaja-panna-bg-rm.png"
                    className="character"
                    role="presentation"
                    alt=""
                  />
                </div>
              </Link>
              <Link to="/were-monsters">
                <div className="card">
                  <div className="wrapper">
                    <img
                      src="assets/were-monsters/zhabalaka-1.png"
                      className="cover-image"
                      role="presentation"
                      alt=""
                    />
                  </div>
                  <img
                    src="assets/were-monsters-text.png"
                    className="title"
                    alt="Пераваратні"
                    style={{
                      height: "40px",
                      width: "auto",
                    }}
                  />
                  <img
                    src="assets/zhabalaka-bg-rm.png"
                    className="character"
                    role="presentation"
                    alt=""
                  />
                </div>
              </Link>
            </Box>
            <Typography
              variant="h5"
              align="left"
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                maxWidth: "286px",
                marginBottom: "16px",
                display: { xs: "flex", md: "none" },
              }}
              color="text.secondary"
              paragraph
            >
              ГАЛЕРЭІ ІЛЮСТРАЦЫЙ
            </Typography>
            <Box
              sx={{
                alignItems: "center",
                justifyContent: "even-space",
                flexDirection: "column",
                display: { xs: "flex", md: "none" },
              }}
            >
              <Button
                size="small"
                sx={{ marginBottom: "8px" }}
                component={Link}
                startIcon={<ArrowForwardIcon />}
                to="/monsters"
              >
                Беларускія Нячысцікі
              </Button>
              <Button
                size="small"
                sx={{ marginBottom: "8px" }}
                component={Link}
                startIcon={<ArrowForwardIcon />}
                to="/gods"
              >
                Паганскія Багі
              </Button>
              <Button
                size="small"
                sx={{ marginBottom: "8px" }}
                component={Link}
                startIcon={<ArrowForwardIcon />}
                to="/ghosts"
              >
                Беларускія Здані
              </Button>
              <Button
                size="small"
                component={Link}
                startIcon={<ArrowForwardIcon />}
                to="/were-monsters"
              >
                Пярэваратні
              </Button>
            </Box>
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
                  xs: "24px",
                  sm: "32px",
                },
              }}
            >
              Новыя выданні &laquo;Беларускіх&nbsp;нячысцікаў&raquo; у
              выдавецтве &ldquo;Папуры&ldquo;!
            </Typography>
            <Typography
              variant="h7"
              align="center"
              color="text.secondary"
              paragraph
            >
              А менавіта гэта перавыданне першай кнігі “Беларускія нячысцікі:
              Лясныя” (
              <MUILink
                href="https://www.goodreads.com/book/show/217460582"
                target="_blank"
              >
                GoodReads
              </MUILink>
              ) у новай вокладцы і доўгачаканая новая другая кніга “Беларускія
              нячысцікі: водныя і балотныя” (
              <MUILink
                href="https://www.goodreads.com/book/show/217460712"
                target="_blank"
              >
                GoodReads
              </MUILink>
              ).
              <br />
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <a
                target="_blank"
                href="https://papury.by/site/books/17189/48563"
                rel="noreferrer"
              >
                <Box
                  component="img"
                  src="/assets/book-01.png"
                  alt=""
                  sx={{
                    width: "252px",
                    height: "359px",
                    transition: "transform 0.2s",
                    filter:
                      "drop-shadow(2px 4px 6px black) saturate(1.1) contrast(0.9)",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                />
              </a>
              <a
                target="_blank"
                href="https://papury.by/site/books/17187/22410/41679/57165"
                rel="noreferrer"
              >
                <Box
                  component="img"
                  src="/assets/book-02.png"
                  alt=""
                  sx={{
                    width: "252px",
                    height: "359px",
                    transition: "transform 0.2s",
                    filter:
                      "drop-shadow(2px 4px 6px black) saturate(1.1) contrast(0.9)",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                />
              </a>
            </Box>
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
                  xs: "24px",
                  sm: "32px",
                },
              }}
            >
              Першая частка &laquo;Беларускіх&nbsp;нячысцікаў&raquo; выдана!
            </Typography>
            <Typography
              variant="h7"
              align="center"
              color="text.secondary"
              paragraph
            >
              Выйшаў мой першы артбук (
              <MUILink
                href="https://www.livelib.ru/book/1007675719-belaruskiya-nyachystsiki-lyasnyya-artur-basak"
                target="_blank"
              >
                LiveLib
              </MUILink>
              ,{" "}
              <MUILink
                href="https://www.goodreads.com/book/show/144716398?ac=1&from_search=true&qid=afnJaQLI11&rank=1"
                target="_blank"
              >
                GoodReads
              </MUILink>
              ) з ілюстрацыямі &laquo;нячысцікаў&raquo; і неверагоднымі тэкстамі
              да іх беларускай пісьменніцы Аліны Длатоўскай. Шукайце кнігу ў
              беларускіх кнігарнях.
              <br />
            </Typography>
            {isBookPhotoLoading && (
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
              src="/assets/cover2.jpeg"
              alt=""
              onLoad={handleBookPhotoLoad}
              sx={{
                width: { xs: "calc(100vw - 32px)", sm: "550px" },
                height: { xs: "auto", sm: "550px" },
                margin: "16px 0 32px",
                display: isBookPhotoLoading ? "none" : "inherit",
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
              variant="h7"
              align="center"
              color="text.secondary"
              paragraph
            >
              Зпампоўвайце наборы налепак для папулярных мэссэнджэраў
              <br />
              <br />
              <MUILink
                href="https://stickers.viber.com/pages/custom-sticker-packs/11edae246e95a3c89680e1660801aa39ffaf04a4ff622565"
                target="_blank"
              >
                для Viber
              </MUILink>
              {" | "}
              <MUILink
                href="https://t.me/addstickers/belarusian_monsters"
                target="_blank"
              >
                для Telegram
              </MUILink>
              {" | "}
              <MUILink
                href="/files/belarusian_monsters.wastickers"
                target="_blank"
              >
                для WhatsApp
              </MUILink>
            </Typography>
            <Box
              component="img"
              src="/assets/stickerpack.png"
              alt="Набор налепак Беларускія Нячысцікі"
              onLoad={handleBookPhotoLoad}
              sx={{
                borderRadius: "16px",
                width: { xs: "calc(100vw - 32px)", sm: "550px" },
                height: { xs: "auto" },
                margin: "16px 0 32px",
                display: isBookPhotoLoading ? "none" : "inherit",
              }}
            />
            <Divider sx={{ width: "100%", margin: "32px 0" }} />
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column-reverse", sm: "initial" },
              }}
            >
              <Box
                component="div"
                sx={{
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                <Typography
                  variant="h5"
                  align="left"
                  sx={{
                    maxWidth: "286px",
                    marginTop: { xs: "32px", sm: "inherit" },
                    textAlign: { xs: "center", sm: "left" },
                  }}
                  color="text.secondary"
                  paragraph
                >
                  АРТУР БАСАК
                </Typography>
                <Typography
                  variant="body2"
                  align="left"
                  sx={{
                    maxWidth: "286px",
                    marginTop: "8px",
                    textAlign: { xs: "center", sm: "left" },
                  }}
                  color="text.secondary"
                  paragraph
                >
                  Артур Басак, мастак-самавук, ілюстратар, праграміст і UI
                  інжынер, які натхняецца беларускiм фальклорам ды народнай
                  дэманалогіяй i стварае вобразы вядомых нячысцікаў з паданняў,
                  міфаў, беларускіх легенд і казак. Працуе ў лічбавым фармаце.
                  <br />
                  <br />
                  Яго малюнкі жыўцом можна пабачыць у &laquo;Музеі Міфаў&raquo;
                  Бярэзінскага Запаведніка, Лідскім Замку, а таксама онлайн у
                  Instagram акаунце{" "}
                  <MUILink
                    href="https://www.instagram.com/belarusian_bogeyfolk"
                    target="_blank"
                  >
                    @belarusian_bogeyfolk
                  </MUILink>{" "}
                  і канешне ж тут на гэтым сайце.
                </Typography>
                <Button
                  size="small"
                  component={Link}
                  to="/news"
                  startIcon={<ArrowForwardIcon />}
                >
                  СМІ аб аўтары
                </Button>
              </Box>
              {isAuthorPhotoLoading && (
                <Skeleton
                  sx={{ marginLeft: { xs: "0", sm: "16px" } }}
                  variant="rectangular"
                  width={250}
                  height={300}
                  animation="wave"
                />
              )}
              <Box
                component="img"
                src="/assets/author.png"
                alt=""
                onLoad={handleAuthorPhotoLoad}
                sx={{
                  marginLeft: { xs: "0", sm: "16px" },
                  width: { xs: "320px", sm: "320px" },
                  height: { xs: "auto", sm: "auto" },
                  maxWidth: "calc(100vw - 20%)",
                  display: isAuthorPhotoLoading ? "none" : "inherit",
                }}
              />
            </Box>
          </Container>
        </Box>
      </main>
      <Footer />
    </div>
  );
}
