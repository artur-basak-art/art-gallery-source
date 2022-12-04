import React from "react";
import { useRouteError } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Header />
      <main
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Ой, нешта пайшло не так!</h1>
        <p>Выбачайце, здарылася нейкая памылка.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </main>
      <Footer />
    </div>
  );
}
