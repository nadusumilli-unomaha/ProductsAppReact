import React from 'react'
import { setup, findByTestAttr, checkProps } from '../test/testUtils'
import Product from './Product'
import products from '../../server/resources/product/products.json'

let product = products.groups[0]

describe('Product component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = setup(Product, { product }, {})
    })

    test('renders without crashing', () => {
        const productComponent = findByTestAttr(wrapper, 'component-product')
        expect(productComponent).toHaveLength(1)
    })

    test('renders the correct image to the screen', () => {
        const productImage = findByTestAttr(wrapper, 'product-image')
        expect(productImage).toHaveLength(1)
        expect(productImage.find('img').getElement().props.src).toBe(
            product.hero.href
        )
    })

    test('renders the product name to the screen', () => {
        const productName = findByTestAttr(wrapper, 'product-name')
        expect(productName).toHaveLength(1)
        expect(productName.text()).toBe(product.name)
    })

    test('renders the correct regular price if it exists', () => {
        const productRegularPrice = findByTestAttr(
            wrapper,
            'product-regular-price'
        )
        expect(productRegularPrice).toHaveLength(1)
        expect(productRegularPrice.text()).toContain(
            `$${product.priceRange.regular.low} - $${
                product.priceRange.regular.high
            }`
        )
    })

    test('renders without errors if regular price doesnt exist.', () => {
        const wrapper = setup(Product, { product: products.groups[2] }, {})
        const productRegularPrice = findByTestAttr(
            wrapper,
            'product-regular-price'
        )
        expect(productRegularPrice).toHaveLength(0)
    })

    test('renders the correct selling price to the screen', () => {
        const productSellingPrice = findByTestAttr(
            wrapper,
            'product-selling-price'
        )
        expect(productSellingPrice).toHaveLength(1)
        expect(productSellingPrice.text()).toContain(
            `$${product.priceRange.selling.low} - $${
                product.priceRange.selling.high
            }`
        )
    })

    test('on mouse enter the hero image changes', () => {
        let image = wrapper.state('image')
        expect(image).toBe(product.hero)
        const productImage = findByTestAttr(wrapper, 'product-image')
        productImage.simulate('mouseenter')
        wrapper.update()
        image = wrapper.state('image')
        expect(image).toBe(product.images[1])
    })

    test('on mouse exit the hero image changes', () => {
        let image = wrapper.state('image')
        expect(image).toBe(product.hero)
        const productImage = findByTestAttr(wrapper, 'product-image')
        productImage.simulate('mouseenter')
        wrapper.update()
        image = wrapper.state('image')
        expect(image).toBe(product.images[1])
        productImage.simulate('mouseleave')
        wrapper.update()
        image = wrapper.state('image')
        expect(image).toEqual(product.hero)
    })

    test('change displayCarousel state on clicking the Quicklook', () => {
        const button = findByTestAttr(wrapper, 'product-quicklook')
        let displayCarousel = wrapper.state('displayCarousel')
        expect(displayCarousel).toBe(false)
        button.simulate('click')
        wrapper.update()
        displayCarousel = wrapper.state('displayCarousel')
        expect(displayCarousel).toBe(true)
    })

    test('on click quicklook display carousel', () => {
        const button = findByTestAttr(wrapper, 'product-quicklook')
        expect(wrapper.find(`[data-test='component-carousel']`)).toHaveLength(0)
        button.simulate('click')
        wrapper.update()
        const carouselComponent = findByTestAttr(wrapper, 'component-carousel')
        expect(carouselComponent).toHaveLength(1)
    })

    test('check the props exists in the Product component.', () => {
        checkProps(Product, { product: {} })
    })
})
