const Router = require("express").Router;
const products = require("./products.json");

const router = Router();

router
    .route("/")
    .get((req, res) => {
        res.status(200).send(products.groups);
    })
    .post((req, res) => {
        res.status(200).send({ hello: "data" });
    });

router
    .route("/:id")
    .get((req, res) => {
        let product = products.groups.filter(
            product => product.id === req.params.id
        );
        res.status(200).send(product);
    })
    .put()
    .delete();

module.exports = router;
