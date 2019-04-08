import React from "react";
import products_reducer from "./productsReducer";
import { GET_PRODUCTS } from "../actions/products";
import products from "../../server/resources/product/products.json";

const initialState = {
    data: [],
    errors: []
};

const data_array = { data: products.groups, errors: [] };

describe("Products Reducer: ", () => {
    test("initial state should have an empty data array.", () => {
        const state = products_reducer();
        expect(state).toEqual(initialState);
    });

    test("return state of passed payload on recieving an action of type GET_PRODUCTS", () => {
        const action = { type: GET_PRODUCTS, payload: data_array };
        const state = products_reducer(initialState, action);
        expect(state).toEqual(data_array);
    });
});
