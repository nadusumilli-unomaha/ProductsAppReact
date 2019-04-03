import Thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import store from "../../src/store";

/** Function: configureStore
 *  Arguments: None
 *  Defenition:
 *      configures the redux store with the enhacers
 *      ,reducers and middlewares
 *  Returns: None
 **/
const configureStore = () =>
    createStore(store, compose(applyMiddleware(Thunk)));

export default configureStore;
