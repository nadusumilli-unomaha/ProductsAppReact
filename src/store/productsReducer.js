import * as productActions from '../actions/products'

// Provides the initial state for the products model
const initialState = {
    data: [],
    errors: []
}

/**
 * Redux Reducer to maintain the state of the products.
 * @funtion products
 * @params {Object} state - state of the application.
 * @params {Object} action - action to be reduced.
 * @returns {Object} - new State
 */
const products = (state = initialState, action = {}) => {
    switch (action.type) {
        case productActions.GET_PRODUCTS:
            return {
                ...state,
                data: action.payload.data,
                errors: []
            }
        default:
            return {
                ...state
            }
    }
}

export default products
