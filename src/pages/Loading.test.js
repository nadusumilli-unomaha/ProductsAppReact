// eslint-disable-next-line no-unused-vars
import React from 'react'
import Loading from './Loading'
import { setup, findByTestAttr } from '../test/testUtils'

describe('Loading component', () => {
    let wrapper

    beforeEach(() => {
        wrapper = setup(Loading)
    })

    test('Must render to the screen.', () => {
        const loadingComponent = findByTestAttr(wrapper, 'component-loading')
        expect(loadingComponent).toHaveLength(1)
    })

    test('Must render all the circle sub divs', () => {
        const circle = findByTestAttr(wrapper, 'circle')
        expect(circle).toHaveLength(12)
    })
})
