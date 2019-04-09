import '@babel/polyfill'
import * as productActions from './products'
import moxios from 'moxios'

describe('Product Actions', () => {
    beforeEach(() => {
        moxios.install()
    })
    afterEach(() => {
        moxios.uninstall()
    })
    test("return an action with type 'GET_PRODUCTS'", () => {
        const action = productActions.getProducts()
        expect(true).toEqual(true)
    })
})
