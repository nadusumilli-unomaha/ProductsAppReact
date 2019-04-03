import Thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import store from "./index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/** Function: configureStore
 *  Arguments: None
 *  Defenition:
 *      configures the redux store with the enhacers
 *      ,reducers and middlewares
 *  Returns: None
 **/
const configureStore = () =>
    createStore(store, composeEnhancers(applyMiddleware(Thunk)));

export default configureStore;
