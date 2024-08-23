import React from "react";
import { useLoaderData, Link as LinkRouter } from "react-router-dom";

import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Button from "@mui/material/Button";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";

export default function NewsPage() {
  const { data } = useLoaderData();

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
            maxWidth="md"
            sx={{
              display: "flex",
              alignItems: "flex-start",
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
              Згадкі мастака ў СМІ
            </Typography>
            <Button
              size="small"
              startIcon={<ArrowBackIcon />}
              component={LinkRouter}
              to="/"
            >
              НАЗАД
            </Button>
            <List
              sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}
            >
              {data.map((item) => (
                <>
                  <Link href={item.url} target="_blank">
                    <ListItem key={item.url} sx={{ paddingLeft: "0" }}>
                      <ListItemAvatar>
                        <Avatar>
                          <NewspaperIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={item.name} secondary={item.date} />
                    </ListItem>
                  </Link>
                  {item.paper && (
                    <Link
                      sx={{
                        display: "inline",
                      }}
                      href={`/files/${item.paper}`}
                      target="_blank"
                    >
                      [НА ПАПЕРЫ]
                    </Link>
                  )}
                </>
              ))}
            </List>
          </Container>
        </Box>
      </main>
      <Footer />
    </div>
  );
}
