import express from "express";
import cors from "cors";
import { json, urlencoded } from "body-parser";
import morgan from "morgan";
import product_router from "./resources/product/product.router";
import { renderer } from "./helpers/renderer";

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
    res.send(renderer(req));
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
