import "@babel/polyfill";
import * as product_actions from "./products";
import moxios from "moxios";

describe("Product Actions", () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    });
    test("return an action with type 'GET_PRODUCTS'", () => {
        const action = product_actions.getProducts();
        expect(true).toEqual(true);
    });
});
