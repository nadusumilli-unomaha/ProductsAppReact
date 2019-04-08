import '@babel/polyfill'
import React from 'react'
import ProductList from './ProductList'
import { getProducts } from '../actions/products'
import { findByTestAttr, setup } from '../test/testUtils'
import data from '../../server/resources/product/products.json'

let products = { data: data.groups }

describe('Product List component', () => {
    test('renders without crashing', () => {
        let wrapper = setup(ProductList, { products, getProducts }, {})
        const productListComponent = findByTestAttr(
            wrapper,
            'product-list-component'
        )
        expect(productListComponent).toHaveLength(1)
    })

    test('renders loading screen if data isnt loaded yet', () => {
        let wrapper = setup(ProductList, { getProducts }, {})
        const loadingComponent = findByTestAttr(wrapper, 'component-loading')
        expect(loadingComponent).toHaveLength(1)
    })

    test('the loading variable in state changes.', () => {
        let wrapper = setup(ProductList, { products, getProducts }, {})
        expect(wrapper.state('loading')).toBe(false)
        wrapper.setState({ loading: true })
        wrapper.update()
        expect(wrapper.state('loading')).toBeTruthy()
    })
})
