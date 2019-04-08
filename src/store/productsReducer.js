import * as product_actions from "../actions/products";

// Provides the initial state for the products model
const initial_state = {
    data: [],
    errors: []
};

/**
 * Redux Reducer to maintain the state of the products.
 * @funtion products
 * @params {Object} state - state of the application.
 * @params {Object} action - action to be reduced.
 * @returns {Object} - new State
 */
const products = (state = initial_state, action = {}) => {
    switch (action.type) {
        case product_actions.GET_PRODUCTS:
            return {
                ...state,
                data: action.payload.data,
                errors: []
            };
        default:
            return {
                ...state
            };
    }
};

export default products;
