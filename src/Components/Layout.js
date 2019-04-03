import React from "react";

const Layout = props => (
    <div>
        <header>Header</header>
        <main>{props.children}</main>
        <footer>Footer</footer>
    </div>
);

export default Layout;
