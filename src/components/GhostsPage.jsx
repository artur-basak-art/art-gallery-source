import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Album from "./Album";

export default function GhostsPage() {
    const { data: { categories, title, description } } = useLoaderData();
    return (
        <>
            <Album categories={categories} title={title} description={description} />
            <Outlet />
        </>
    );
}
