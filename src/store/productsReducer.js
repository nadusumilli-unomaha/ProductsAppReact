import * as product_actions from "../actions/products";

// Provides the initial state for the user model
// This is paseed to components as initial state.
const initial_state = {
    data: [],
    errors: []
};

/** Function: user
 *  Arguments:
 *      - state: The state of the user model.
 *      - action: The type and payload from the user actions.
 *  Defenition:
 *      This function checks the type of action and based on
 *      the type it performs changes to the user models state.
 *  Returns:
 *      - state: the state of the user model.
 **/
const products = (state = initial_state, action) => {
    switch (action.type) {
        case product_actions.GET_PRODUCTS:
            return {
                ...state,
                data: action.payload.data,
                errors: []
            };
        case product_actions.GET_PRODUCT:
            return {
                ...state,
                data: [],
                errors: [action.payload]
            };
        case product_actions.CREATE_PRODUCT:
            return {
                ...state,
                data: action.payload.data,
                errors: []
            };
        case product_actions.UPDATE_PRODUCT:
            return {
                ...state,
                data: action.payload.data,
                errors: []
            };
        case product_actions.DELETE_PRODUCT:
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
