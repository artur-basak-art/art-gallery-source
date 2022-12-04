import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import PictureCard from "./PictureCard";
import Header from "./Header";
import Footer from "./Footer";
import ForestStar from "./icons/ForestStar";

export default function Album({ categories, title, description }) {
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
              sm: 2,
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
              {title}
            </Typography>
            <Typography
              variant="h7"
              align="center"
              color="text.secondary"
              paragraph
            >
              {/* eslint-disable-next-line react/no-danger */}
              <span dangerouslySetInnerHTML={{ __html: description }} />
            </Typography>
          </Container>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ForestStar />
        </Box>
        <Container
          sx={{
            py: {
              sm: 4,
              xs: "8px",
            },
          }}
          maxWidth="md"
        >
          {categories.map((category) => (
            <>
              <Typography
                sx={{
                  fontSize: {
                    xs: "18px",
                    sm: "28px",
                  },
                  paddingTop: {
                    sm: 4,
                    xs: "8px",
                  },
                }}
                variant="h5"
                align="left"
                color="text.secondary"
                component="h2"
              >
                {category.name.toUpperCase()}
              </Typography>
              <Grid container spacing={3}>
                {category.items.map((card) => (
                  <Grid item key={card.title} xs={12} sm={6} md={4}>
                    <PictureCard
                      pic={{
                        id: card.src,
                        src: `assets/${category.path}/${card.src}-1-1.png`,
                        name: card.name,
                        description: `${card.description.substring(0, 50)}...`,
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </>
          ))}
        </Container>
      </main>
      <Footer />
    </>
  );
}
