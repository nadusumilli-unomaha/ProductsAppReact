import '@babel/polyfill'
import * as productActions from './products'
import { products } from '../../server/resources/product/products'
import configureStore from '../store/configureStore'

describe('Product Actions', () => {
    let store

    beforeEach(() => {
        store = configureStore()
    })

    test("return an action with type 'GET_PRODUCTS'", async () => {
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
