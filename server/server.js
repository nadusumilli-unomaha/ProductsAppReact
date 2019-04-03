import "@babel/polyfill";
import express from "express";
import cors from "cors";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";
import product_router from "./resources/product/product.router";
import { renderer } from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();

app.disable("x-powered-by");
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static("public"));

app.use("/api/products", product_router);

// Server side rendering.
app.get("*", (req, res) => {
    const store = createStore();
    res.send(renderer(req, store));
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
