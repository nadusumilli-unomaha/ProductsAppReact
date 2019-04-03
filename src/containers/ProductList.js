import { connect } from "react-redux";
import { getProducts } from "../actions/products";
import ProductList from "../components/ProductList";

const mapStateToProps = ({ products }) => ({
    products
});

export default connect(
    mapStateToProps,
    { getProducts }
)(ProductList);
