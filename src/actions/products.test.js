import '@babel/polyfill'
import * as productActions from './products'
import { products } from '../../server/resources/product/products'
import configureStore from '../store/configureStore'

describe('Product Actions', () => {
    let store

    beforeEach(() => {
        store = configureStore()
    })

    test("'GET_PRODUCTS' returns the correct data to the store.", async () => {
        expect(store.getState()).toEqual({ products: { data: [], errors: [] } })
        await store.dispatch(productActions.getProducts())
        let expectedState = {
            products: {
                data: products.groups,
                errors: []
            }
        }
        expect(store.getState()).toEqual(expectedState)
    })
})
