import "@babel/polyfill";
import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
