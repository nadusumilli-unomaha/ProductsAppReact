import '@babel/polyfill'
import React from 'react'
import ProductList from './ProductList'
import { getProducts } from '../actions/products'
import { findByTestAttr, setup } from '../test/testUtils'
import { products } from '../../server/resources/product/products'

describe('Product List component', () => {
    test('renders without crashing', () => {
        let wrapper = setup(
            ProductList,
            { products: { data: products.groups }, getProducts },
            {}
        )
        const productListComponent = findByTestAttr(
            wrapper,
            'product-list-component'
        )
        expect(productListComponent).toHaveLength(1)
    })

    test('renders loading screen if data isnt loaded yet', () => {
        let wrapper = setup(
            ProductList,
            { products: { data: null }, getProducts },
            {}
        )
        const loadingComponent = findByTestAttr(wrapper, 'component-loading')
        expect(loadingComponent).toHaveLength(1)
    })

    test('the loading variable in state changes.', () => {
        let wrapper = setup(
            ProductList,
            { products: { data: products.groups }, getProducts },
            {}
        )
        expect(wrapper.state('loading')).toBe(false)
        wrapper.setState({ loading: true })
        wrapper.update()
        expect(wrapper.state('loading')).toBeTruthy()
    })

    test('the product list must render all the products.', () => {
        let wrapper = setup(
            ProductList,
            { products: { data: products.groups }, getProducts },
            {}
        )
        expect(wrapper.children()).toHaveLength(products.groups.length)
    })
})
