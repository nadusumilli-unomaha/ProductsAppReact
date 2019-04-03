import React from "react";
import ReactDOM from "react-dom";
import Product from "./Product";

let product = {
    id: "wavy-jacquard-duvet-cover-shams-b2694",
    name: "Wavy Jacquard Duvet Cover + Shams",
    links: {
        www:
            "https://www.westelm.com/products/wavy-jacquard-duvet-cover-shams-b2694/"
    },
    priceRange: {
        regular: { high: 199, low: 34 },
        selling: { high: 159, low: 27 },
        type: "special"
    },
    thumbnail: {
        size: "m",
        meta: "",
        alt: "",
        rel: "thumbnail",
        width: 363,
        href:
            "https://www.westelm.com/weimgs/ab/images/wcm/products/201912/0009/wavy-jacquard-duvet-cover-shams-m.jpg",
        height: 363
    },
    hero: {
        size: "m",
        meta: "",
        alt: "",
        rel: "hero",
        width: 363,
        href:
            "https://www.westelm.com/weimgs/ab/images/wcm/products/201912/0009/wavy-jacquard-duvet-cover-shams-m.jpg",
        height: 363
    },
    images: [
        {
            size: "m",
            meta: "",
            alt: "",
            rel: "althero",
            width: 363,
            href:
                "https://www.westelm.com/weimgs/ab/images/wcm/products/201912/0009/wavy-jacquard-duvet-cover-shams-1-m.jpg",
            height: 363
        },
        {
            size: "m",
            meta: "",
            alt: "",
            rel: "althero",
            width: 363,
            href:
                "https://www.westelm.com/weimgs/ab/images/wcm/products/201911/0001/wavy-jacquard-duvet-cover-shams-m.jpg",
            height: 363
        }
    ],
    swatches: [],
    messages: [],
    flags: [{ bopisSuppress: false, rank: 3, id: "newcore" }],
    reviews: {
        recommendationCount: 0,
        likelihood: 0,
        reviewCount: 0,
        averageRating: 0,
        id: "wavy-jacquard-duvet-cover-shams-b2694",
        type: "GROUP_REVIEWS"
    }
};

describe("Product component", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Product product={product} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
