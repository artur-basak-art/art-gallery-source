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

import Button from "@mui/material/Button";
import Header from "./Header";
import Footer from "./Footer";
import RefreshScroll from "./RefreshScroll";

export default function NewsPage() {
  const { data } = useLoaderData();

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
              Lorem ipsum text
            </Typography>
            <Button size="small" component={LinkRouter} to="/">
              Back
            </Button>
            <List
              sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}
            >
              {data.map((item) => (
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
              ))}
            </List>
          </Container>
        </Box>
      </main>
      <Footer />
      <RefreshScroll />
    </div>
  );
}
