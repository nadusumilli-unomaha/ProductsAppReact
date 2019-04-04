import "@babel/polyfill";
import express from "express";
import cors from "cors";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";
import { matchRoutes } from "react-router-config";
import Routes from "../src/Routes";
import product_router from "./resources/product/product.router";
import { renderer } from "./helpers/renderer";
import createStore from "./helpers/createStore";
import path from "path";

const app = express();

app.disable("x-powered-by");
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static(path.resolve("./public")));

app.use("/api/products", product_router);

// Server side rendering.
app.get("*", (req, res) => {
    const store = createStore();

    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData ? route.loadData(store) : null;
    });

    Promise.all(promises).then(() => {
        res.send(renderer(req, store));
    });
});

const start = () => {
    try {
        app.listen(8000, () => {
            console.log("Server running on port 8000");
        });
    } catch (e) {
        console.log("Server could not be started.");
    }
};

export default start;
