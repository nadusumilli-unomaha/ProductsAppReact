import React from "react";
import { shallow } from "enzyme";
import Loading from "./Loading";

describe("Loading component", () => {
    test("Must render to the screen.", () => {
        const component = shallow(<Loading />);
        expect(component).toBeTruthy();
    });
});
