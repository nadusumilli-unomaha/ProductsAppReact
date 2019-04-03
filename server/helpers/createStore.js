import { createStore, applyMiddleware, compose } from "redux";
import store from "../../src/store";
import thunk from "redux-thunk";

/** Function: configureStore
 *  Arguments: None
 *  Defenition:
 *      configures the redux store with the enhacers
 *      ,reducers and middlewares
 *  Returns: None
 **/
const configureStore = () =>
    createStore(store, {}, compose(applyMiddleware(thunk)));

export default configureStore;
