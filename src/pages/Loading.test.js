import React from "react";
import Loading from "./Loading";
import { setup, findByTestAttr } from "../test/testUtils";

describe("Loading component", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setup(Loading);
    });

    test("Must render to the screen.", () => {
        const loading_component = findByTestAttr(wrapper, "component-loading");
        expect(loading_component).toHaveLength(1);
    });

    test("Must render all the circle sub divs", () => {
        const circle = findByTestAttr(wrapper, "circle");
        expect(circle).toHaveLength(12);
    });
});
