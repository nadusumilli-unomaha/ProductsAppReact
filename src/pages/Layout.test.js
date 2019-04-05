import React from "react";
import { shallow } from "enzyme";
import Layout from "./Layout";

let route = { routes: ["/"] };

describe("Layout component", () => {
    test("Must render to the screen.", () => {
        const component = shallow(<Layout route={route} />);
        expect(component).toBeTruthy();
    });
});
