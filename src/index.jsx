import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blueGrey, grey } from "@mui/material/colors";

import MainPage from "./components/MainPage";
import MonstersPage from "./components/MonstersPage";
import WereMonstersPage from "./components/WereMonstersPage";
import GhostsPage from "./components/GhostsPage";
import GodsPage from "./components/GodsPage";
import ErrorPage from "./components/ErrorPage";
import NewsPage from "./components/NewsPage";
import Details from "./components/Details";
import ScrollTop from "./components/ScrollTop";

import loadNews from "./data/news";
import loadGods from "./data/gods";
import loadMonsters from "./data/monsters";
import loadWereMonsters from "./data/were-monsters";
import loadGhosts from "./data/ghosts";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "./index.css";

const router = createHashRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/gods",
    element: <GodsPage />,
    loader: loadGods,
    children: [
      {
        path: "/gods/:characterId",
        element: <Details />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/monsters",
    element: <MonstersPage />,
    loader: loadMonsters,
    children: [
      {
        path: "/monsters/:characterId",
        element: <Details />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/ghosts",
    element: <GhostsPage />,
    loader: loadGhosts,
    children: [
      {
        path: "/ghosts/:characterId",
        element: <Details />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/were-monsters",
    element: <WereMonstersPage />,
    loader: loadWereMonsters,
    children: [
      {
        path: "/were-monsters/:characterId",
        element: <Details />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/news",
    element: <NewsPage />,
    loader: loadNews,
    errorElement: <ErrorPage />,
  },
]);

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: grey[200],
    },
    secondary: {
      main: blueGrey[800],
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
      <ScrollTop />
    </ThemeProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
