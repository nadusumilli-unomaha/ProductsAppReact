import React from 'react'
import { shallow } from 'enzyme'
import checkPropTypes from 'check-prop-types'
import reducers from '../store'
import { createStore } from 'redux'

/**
 * Factory function to setup a wrapper for tests.
 * @funtion setup
 * @params {Component} ComponentToTest - Component to setup wrapper.
 * @params {Object} props - Component props specific to setup.
 * @params {Object} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (ComponentToTest, props = {}, state = {}) => {
    const wrapper = shallow(<ComponentToTest {...props} />)
    if (typeof ComponentToTest !== 'function')
        if (state) wrapper.setState(state)
    return wrapper
}

/**
 * Factory function to find an attribute within a wrapper.
 * @funtion findByTestAttr
 * @params {ShallowWrapper} wrapper - Shallow wrapper of the component to search.
 * @params {string} val - The data-test attribute to search by.
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`)
}

/**
 * Factory function to check proptypes for a given component
 * @funtion checkProps
 * @params {React.Component} wrapper - Shallow wrapper of the component to search.
 * @params {string} val - The data-test attribute to search by.
 * @returns {ShallowWrapper}
 */
const checkProps = (component, confirmingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        confirmingProps,
        'prop',
        component.name
    )
    expect(propError).toBeUndefined()
}

/**
 * Factory function to check proptypes for a given component
 * @funtion storeFactory
 * @params {object} initialState  - The initial State of the app.
 * @returns {Redux.Store} The state of the app.
 */
const storeFactory = initialState => {
    return createStore(reducers, initialState)
}

export { setup, findByTestAttr, checkProps, storeFactory }
