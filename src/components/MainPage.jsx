import React, { useCallback, useState } from "react";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";

import Button from "@mui/material/Button";
import MUILink from "@mui/material/Link";
import { Link } from "react-router-dom";
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
              Вітаю, Спадарства!
            </Typography>
            <Typography
              variant="h7"
              align="center"
              color="text.secondary"
              paragraph
            >
              У выдавецтве &laquo;Тэхналогія&raquo; выйшаў{" "}
              <MUILink
                href="https://www.livelib.ru/book/1007675719-belaruskiya-nyachystsiki-lyasnyya-artur-basak"
                target="_blank"
              >
                мой першы артбук
              </MUILink>{" "}
              з ілюстрацыямі &laquo;нячысцікаў&raquo; і неверагоднымі тэкстамі
              да іх беларускай пісьменніцы{" "}
              <MUILink
                href="https://www.livelib.ru/author/1093131-alina-dlatoskaya"
                target="_blank"
              >
                Аліны Длатоўскай
              </MUILink>
              . Шукайце кнігу ў беларускіх кнігарнях.
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
            <Divider sx={{ width: "100%", margin: "32px 0" }} />
            <Box
              sx={{
                alignItems: "center",
                justifyContent: "even-space",
                display: { xs: "none", sm: "flex" },
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
            </Box>
            <Divider
              sx={{
                width: "100%",
                margin: "32px 0",
                display: { xs: "none", sm: "block" },
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column-reverse", sm: "initial" },
              }}
            >
              <Box component="div">
                <Typography
                  variant="h5"
                  align="left"
                  sx={{
                    maxWidth: "286px",
                    marginTop: { xs: "32px", sm: "inherit" },
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
                    href="https://www.instagram.com/belarusian_monsters"
                    target="_blank"
                  >
                    @belarusian_monsters
                  </MUILink>{" "}
                  і канешне ж тут на гэтым сайце.
                </Typography>
                <Button size="small" component={Link} to="/news">
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
                src="/assets/profile.png"
                width={250}
                height={280}
                alt=""
                onLoad={handleAuthorPhotoLoad}
                sx={{
                  marginLeft: { xs: "0", sm: "16px" },
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
