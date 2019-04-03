import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import Routes from "../../src/Routes";
import serialize from "serialize-javascript";
import fs from "fs";
import path from "path";

const renderer = (req, store) => {
    const context = {};
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
                <>{renderRoutes(Routes)}</>
            </StaticRouter>
        </Provider>
    );

    const data = fs.readFileSync(path.resolve("./src/index.html")).toString();
    return data.replace(
        '<div id="root"></div>',
        `<div id="root">${content}</div>
        <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
        `
    );
};

export { renderer };
