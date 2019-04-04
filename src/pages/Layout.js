import React from "react";
import { renderRoutes } from "react-router-config";
import "./Layout.scss";

const Layout = ({ route }) => (
    <>
        <header>
            <h1>WSI</h1>
            <hr />
        </header>
        <main>{renderRoutes(route.routes)}</main>
        <footer />
    </>
);

export default Layout;
