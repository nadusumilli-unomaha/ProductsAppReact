import React, { Component } from 'react'
import Loading from '../pages/Loading'
import Product from './Product'
import PropTypes from 'prop-types'
import { getProducts } from '../actions/products'
import './ProductList.scss'

/**
 * ProductList class that renders all the products.
 * @class ProductList
 * @returns {JSX.Element} jsx to render to screen.
 */
class ProductList extends Component {
    /**
     * constructor for the class.
     * @function constructor
     * @param {object} props - props for the class.
     * @returns {None}
     */
    constructor(props) {
        super(props)
        this.state = {
            loading: this.props.products.data ? false : true
        }
    }

    /**
     * ComponentDidMount called after the
     * component is mounted to the DOM.
     * @function componentDidMount
     * @param {None}
     * @returns {None}
     */
    componentDidMount() {
        let { getProducts } = this.props
        getProducts()
    }

    /**
     * ComponentDidUpdate called after the
     * state of the class is updated.
     * @function componentDidUpdate
     * @param {None}
     * @returns {None}
     */
    componentDidUpdate(prevProps) {
        if (
            prevProps.products !== this.props.products &&
            this.props.products.data
        ) {
            this.setState({ loading: false })
        }
    }

    /**
     * renders each product from the array.
     * @function renderPrice
     * @param {None}
     * @returns {JSX.Element} jsx of product to render.
     */
    renderProducts() {
        return this.props.products.data.map(product => (
            <Product key={product.id} product={product} />
        ))
    }

    render() {
        let { loading } = this.state
        if (loading)
            return (
                <div data-test="component-loading">
                    <Loading />
                </div>
            )
        return (
            <div
                data-test="product-list-component"
                className="product-list row">
                {this.renderProducts()}
            </div>
        )
    }
}

// Proptypes for the class.
ProductList.propTypes = {
    getProducts: PropTypes.func.isRequired,
    products: PropTypes.object
}

/**
 * load data dispatches state to the store.
 * @function loadData
 * @param {object} store - state of the app.
 * @returns {Redux.store} state of the app.
 */
const loadData = store => {
    return store.dispatch(getProducts())
}

export { loadData }
export default ProductList
