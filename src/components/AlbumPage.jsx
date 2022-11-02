import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import PictureCard from "./PictureCard";
import Header from "./Header";
import Footer from "./Footer";

export default function AlbumPage() {
  const { data } = useLoaderData();

  return (
    <>
      <Header />
      <main>
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
              bgcolor: "background.paper",
            }}
          >
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              sx={{
                fontSize: {
                  xs: "24px",
                  sm: "40px",
                },
              }}
              gutterBottom
            >
              Lorem ipsum text
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
          </Container>
        </Box>
        <Container
          sx={{
            py: {
              sm: 8,
              xs: "8px",
            },
          }}
          maxWidth="md"
        >
          <Grid container spacing={3}>
            {data.map((card) => (
              <Grid item key={card.name} xs={12} sm={6} md={4}>
                <PictureCard
                  pic={{
                    id: card.src,
                    src: "https://picsum.photos/2000/3000",
                    name: "Name",
                    description:
                      "Lorem ipsum description lorem ipsum description lorem ipsum",
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer />
      <Outlet />
    </>
  );
}
