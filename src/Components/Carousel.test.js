import React from 'react'
import Carousel from './Carousel'
import { setup, findByTestAttr } from '../test/testUtils'
import { products } from '../../server/resources/product/products'

const images = products.groups[0].images

describe('Carousel component', () => {
    let wrapper
    let toggleCarouselDisplay

    beforeEach(() => {
        toggleCarouselDisplay = jest.fn()
        wrapper = setup(Carousel, { images, toggleCarouselDisplay }, {})
    })

    test('Must render to the screen.', () => {
        const carouselComponent = findByTestAttr(wrapper, 'component-carousel')
        expect(carouselComponent).toHaveLength(1)
    })

    test('on click close hide carousel component.', () => {
        const instance = wrapper.instance()
        const spy = jest.spyOn(instance, 'closeCarousel')
        const closeBtn = findByTestAttr(wrapper, 'carousel-close-btn')
        closeBtn.simulate('click')
        wrapper.update()
        expect(spy).toHaveBeenCalledTimes(0)
    })

    test('renders the correct image to the screen', () => {
        const carouselImage = findByTestAttr(wrapper, 'carousel-image')
        expect(carouselImage).toHaveLength(1)
        expect(carouselImage.find('img').getElement().props.src).toBe(
            images[0].href
        )
    })

    test('renders the correct images to scrollable content', () => {
        const carouselImage = findByTestAttr(wrapper, 'small-images')
        expect(carouselImage.children()).toHaveLength(images.length)
    })
})
