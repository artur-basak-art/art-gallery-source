import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import Album from "./Album";

export default function MonstersPage() {
  const {
    data: { categories, title, description },
  } = useLoaderData();
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta property="og:locale" content="be_BY" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://arturbasak.art/#/${categories[0].root}`}
        />
        <meta
          property="og:image"
          content="https://arturbasak.art/assets/forest/Hajouka-1-1.png"
        />
      </Helmet>
      <Album
        categories={categories}
        title={title}
        description={description}
        withImage="/assets/jan-kliks-lashkevich.png"
      />
      <Outlet />
    </>
  );
}
