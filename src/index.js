import '@babel/polyfill'
import React from 'react'
import { hydrate } from 'react-dom'
import { renderRoutes } from 'react-router-config'
import Routes from './Routes'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'

const store = configureStore(window.INITIAL_STATE)

hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <>{renderRoutes(Routes)}</>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
