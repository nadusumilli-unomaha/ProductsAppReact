import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../../src/Routes";

const renderer = req => {
    const context = {};
    const content = renderToString(
        <StaticRouter location={req.url} context={context}>
            <Routes />
        </StaticRouter>
    );
    return `
        <html>
            <head>
            </head>
            <body>
                <div id='root'>${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
};

export { renderer };
