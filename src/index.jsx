import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blueGrey, grey } from "@mui/material/colors";

import MainPage from "./components/MainPage";
import MonstersPage from "./components/MonstersPage";
import GodsPage from "./components/GodsPage";
import ErrorPage from "./components/ErrorPage";
import NewsPage from "./components/NewsPage";
import Details from "./components/Details";
import ScrollTop from "./components/ScrollTop";
import CookieAlert from "./components/CookieAlert";

import loadNews from "./data/news";
import loadGods from "./data/gods";
import loadMonsters from "./data/monsters";

import reportWebVitals from "./reportWebVitals";

import "./index.css";

const router = createBrowserRouter([
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
    path: "/news",
    element: <NewsPage />,
    loader: loadNews,
    errorElement: <ErrorPage />,
  },
]);

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
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
      <CookieAlert />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
