import { connect } from 'react-redux'
import { getProducts } from '../actions/products'
import ProductList from '../components/ProductList'

/**
 * constructor for the class.
 * @function mapStateToProps
 * @param {object} state - state of the app.
 * @returns {object} props passed to component.
 */
const mapStateToProps = ({ products }) => ({
    products
})

export default connect(
    mapStateToProps,
    { getProducts }
)(ProductList)
