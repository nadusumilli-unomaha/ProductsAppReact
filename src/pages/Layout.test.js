import React from 'react'
import { setup, findByTestAttr, checkProps } from '../test/testUtils'
import Layout from './Layout'

let route = { routes: ['/'] }

describe('Layout component', () => {
    let wrapper

    beforeEach(() => {
        wrapper = setup(Layout, { route })
    })

    test('Must render to the screen.', () => {
        const layoutComponent = findByTestAttr(wrapper, 'component-layout')
        expect(layoutComponent).toHaveLength(1)
    })

    test('must have a header with content', () => {
        const header = findByTestAttr(wrapper, 'header')
        expect(header).toHaveLength(1)
        expect(header.text().length).not.toBe(0)
    })

    test('must have a main with content', () => {
        const main = findByTestAttr(wrapper, 'main')
        expect(main).toHaveLength(1)
        expect(main.text().length).not.toBe(0)
    })

    test('must render a footer to the screen.', () => {
        const footer = findByTestAttr(wrapper, 'footer')
        expect(footer).toHaveLength(1)
    })

    test('does not throw warning with expected props', () => {
        const expectedProps = { route: {} }
        checkProps(Layout, expectedProps)
    })
})
