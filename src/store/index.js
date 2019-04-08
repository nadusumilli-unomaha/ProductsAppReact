import { combineReducers } from 'redux'
import productsReducer from './productsReducer'

// Returns a merged reducer for redux state.
export default combineReducers({
    products: productsReducer
})
