import React from "react";
import { renderRoutes } from "react-router-config";
import PropTypes from "prop-types";
import "./Layout.scss";

/**
 * Functional React Component that renders a layout to screen.
 * @funtion Layout
 * @params {Object} props - Component props.
 * @returns {JSX.Element} - Layout component for a basic layout in app.
 */
const Layout = ({ route }) => (
    <div data-test="component-layout">
        <header data-test="header">
            <h1>WSI</h1>
            <hr />
        </header>
        <main data-test="main">{renderRoutes(route.routes)}</main>
        <footer data-test="footer" />
    </div>
);

Layout.propTypes = {
    route: PropTypes.object.isRequired
};

export default Layout;
