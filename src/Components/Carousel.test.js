import React from "react";
import Carousel from "./Carousel";
import { setup, findByTestAttr } from "../test/testUtils";
import data from "../../server/resources/product/products.json";

const images = data.groups[0].images;

describe("Carousel component", () => {
    let wrapper;
    let toggleCarouselDisplay;

    beforeEach(() => {
        toggleCarouselDisplay = jest.fn();
        wrapper = setup(Carousel, { images, toggleCarouselDisplay }, {});
    });

    test("Must render to the screen.", () => {
        const carousel_component = findByTestAttr(
            wrapper,
            "component-carousel"
        );
        expect(carousel_component).toHaveLength(1);
    });

    test("on click close hide carousel component.", () => {
        const instance = wrapper.instance();
        const spy = jest.spyOn(instance, "closeCarousel");
        const closeBtn = findByTestAttr(wrapper, "carousel-close-btn");
        closeBtn.simulate("click");
        wrapper.update();
        expect(spy).toHaveBeenCalledTimes(0);
    });

    test("renders the correct image to the screen", () => {
        const carousel_image = findByTestAttr(wrapper, "carousel-image");
        expect(carousel_image).toHaveLength(1);
        expect(carousel_image.find("img").getElement().props.src).toBe(
            images[0].href
        );
    });

    test("renders the correct image to the screen", () => {
        const carousel_image = findByTestAttr(wrapper, "small-images");
        expect(carousel_image.children()).toHaveLength(images.length);
    });
});
