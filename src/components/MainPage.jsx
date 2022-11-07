import React, { useCallback, useState } from "react";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";

import Button from "@mui/material/Button";
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
              Lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum
              text lorem ipsum text lorem ipsum text lorem ipsum text lorem
              ipsum text lorem ipsum text lorem ipsum text lorem ipsum text
              lorem ipsum text lorem ipsum text
            </Typography>
            {isBookPhotoLoading && (
              <Skeleton
                sx={{
                  margin: "16px 0 32px",
                  width: { xs: "calc(100vw - 32px)", sm: "550px" },
                }}
                variant="rectangular"
                height={300}
                animation="wave"
              />
            )}
            <Box
              component="img"
              src="https://picsum.photos/550/300"
              alt=""
              onLoad={handleBookPhotoLoad}
              sx={{
                width: { xs: "calc(100vw - 32px)", sm: "550px" },
                height: { xs: "auto", sm: "300px" },
                margin: "16px 0 32px",
                display: isBookPhotoLoading ? "none" : "inherit",
              }}
            />
            <Typography
              variant="h7"
              align="center"
              color="text.secondary"
              paragraph
            >
              Lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum
              text lorem ipsum text lorem ipsum text lorem ipsum text lorem
              ipsum text lorem ipsum text lorem ipsum text lorem ipsum text
              lorem ipsum text lorem ipsum text
            </Typography>
            <Divider sx={{ width: "100%", margin: "32px 0" }} />
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
                    Артур Басак, мастак-самавук, праграміст і UI інжынер, натхняецца беларускiм фальклорам ды народнай дэманалогіяй i стварае вобразы вядомых нячысцікаў з паданняў і міфаў. Яго малюнкi можна пабачыць у Instagram акаунце @belarusian_monsters.
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
