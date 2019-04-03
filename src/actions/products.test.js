import * as product_actions from "./products";

describe("Product Actions", () => {
    test("return an action with type 'REQUEST_SUCCESS'", () => {
        const action = product_actions.getProducts();
        expect(action).toEqual({ type: product_actions.REQUEST_SUCCESS });
    });
});
