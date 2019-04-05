import React from "react";
import { shallow } from "enzyme";
import ProductList from "./ProductList";
import * as product_actions from "../actions/products";
import "@babel/polyfill";

describe("Product List component", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(
            <ProductList getProducts={product_actions.getProducts} />
        );
        expect(wrapper).toBeTruthy();
    });
});
