import { createStore, applyMiddleware, compose } from "redux";
import store from "./index";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/** Function: configureStore
 *  Arguments: None
 *  Defenition:
 *      configures the redux store with the enhacers
 *      ,reducers and middlewares
 *  Returns: None
 **/
const configureStore = initialState =>
    createStore(store, initialState, composeEnhancers(applyMiddleware(thunk)));

export default configureStore;
