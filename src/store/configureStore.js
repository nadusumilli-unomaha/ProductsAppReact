import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./index";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * Create a redux store with state and reducers
 * @funtion configureStore
 * @params {Object} initialState - Initial state of
 *                  the application on page load.
 * @returns {Redux.store} - The store for the application.
 */
const configureStore = initialState =>
    createStore(
        reducers,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    );

export default configureStore;
