import { connect } from "react-redux";
import { getProducts, getOneProduct } from "../actions/products";
import ProductList from "../components/ProductList";

const MapStateToProps = ({ products }) => ({
    products
});

export default connect(
    MapStateToProps,
    { getProducts, getOneProduct }
)(ProductList);
