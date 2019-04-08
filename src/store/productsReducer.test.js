import React from 'react'
import productsReducer from './productsReducer'
import { GET_PRODUCTS } from '../actions/products'
import products from '../../server/resources/product/products.json'

const initialState = {
    data: [],
    errors: []
}

const dataArray = { data: products.groups, errors: [] }

describe('Products Reducer: ', () => {
    test('initial state should have an empty data array.', () => {
        const state = productsReducer()
        expect(state).toEqual(initialState)
    })

    test('return state of passed payload on recieving an action of type GET_PRODUCTS', () => {
        const action = { type: GET_PRODUCTS, payload: dataArray }
        const state = productsReducer(initialState, action)
        expect(state).toEqual(dataArray)
    })
})
