import React from "react";
import { renderRoutes } from "react-router-config";

const Layout = ({ route }) => (
    <>
        <header>Header</header>
        <main>{renderRoutes(route.routes)}</main>
        <footer />
    </>
);

export default Layout;
