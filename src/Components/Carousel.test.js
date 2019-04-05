import React from "react";
import { shallow } from "enzyme";
import Carousel from "./Carousel";

let images = [
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
];

describe("Carousel component", () => {
    test("Must render to the screen.", () => {
        const component = shallow(<Carousel images={images} />);
        expect(component).toBeTruthy();
    });
});
