import React from 'react'
import ProductList from './containers/ProductList'
import { loadData } from './components/ProductList'
import Layout from './pages/Layout'

export default [
    {
        component: Layout,
        routes: [
            {
                path: '/',
                component: ProductList,
                loadData
            }
        ]
    }
]
