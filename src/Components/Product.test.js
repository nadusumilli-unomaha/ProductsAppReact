import React from "react";
import { setup, findByTestAttr, checkProps } from "../test/testUtils";
import Product from "./Product";
import products from "../../server/resources/product/products.json";

let product = products.groups[0];

describe("Product component", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup(Product, { product }, {});
    });

    test("renders without crashing", () => {
        const product_component = findByTestAttr(wrapper, "component-product");
        expect(product_component).toHaveLength(1);
    });

    test("renders the correct image to the screen", () => {
        const product_image = findByTestAttr(wrapper, "product-image");
        expect(product_image).toHaveLength(1);
        expect(product_image.find("img").getElement().props.src).toBe(
            product.hero.href
        );
    });

    test("renders the product name to the screen", () => {
        const product_name = findByTestAttr(wrapper, "product-name");
        expect(product_name).toHaveLength(1);
        expect(product_name.text()).toBe(product.name);
    });

    test("renders the correct regular price if it exists", () => {
        const product_regular_price = findByTestAttr(
            wrapper,
            "product-regular-price"
        );
        expect(product_regular_price).toHaveLength(1);
        expect(product_regular_price.text()).toContain(
            `$${product.priceRange.regular.low} - $${
                product.priceRange.regular.high
            }`
        );
    });

    test("renders without errors if regular price doesnt exist.", () => {
        const wrapper = setup(Product, { product: products.groups[2] }, {});
        const product_regular_price = findByTestAttr(
            wrapper,
            "product-regular-price"
        );
        expect(product_regular_price).toHaveLength(0);
    });

    test("renders the correct selling price to the screen", () => {
        const product_selling_price = findByTestAttr(
            wrapper,
            "product-selling-price"
        );
        expect(product_selling_price).toHaveLength(1);
        expect(product_selling_price.text()).toContain(
            `$${product.priceRange.selling.low} - $${
                product.priceRange.selling.high
            }`
        );
    });

    test("on mouse enter the hero image changes", () => {
        let image = wrapper.state("image");
        expect(image).toBe(product.hero);
        const product_img = findByTestAttr(wrapper, "product-image");
        product_img.simulate("mouseenter");
        wrapper.update();
        image = wrapper.state("image");
        expect(image).toBe(product.images[1]);
    });

    test("on mouse exit the hero image changes", () => {
        let image = wrapper.state("image");
        expect(image).toBe(product.hero);
        const product_img = findByTestAttr(wrapper, "product-image");
        product_img.simulate("mouseenter");
        wrapper.update();
        image = wrapper.state("image");
        expect(image).toBe(product.images[1]);
        product_img.simulate("mouseleave");
        wrapper.update();
        image = wrapper.state("image");
        expect(image).toEqual(product.hero);
    });

    test("change displayCarousel state on clicking the Quicklook", () => {
        const button = findByTestAttr(wrapper, "product-quicklook");
        let display_carousel = wrapper.state("displayCarousel");
        expect(display_carousel).toBe(false);
        button.simulate("click");
        wrapper.update();
        display_carousel = wrapper.state("displayCarousel");
        expect(display_carousel).toBe(true);
    });

    test("on click quicklook display carousel", () => {
        const button = findByTestAttr(wrapper, "product-quicklook");
        expect(wrapper.find(`[data-test='component-carousel']`)).toHaveLength(
            0
        );
        button.simulate("click");
        wrapper.update();
        const carousel_component = findByTestAttr(
            wrapper,
            "component-carousel"
        );
        expect(carousel_component).toHaveLength(1);
    });

    test("check the props exists in the Product component.", () => {
        checkProps(Product, { product: {} });
    });
});
