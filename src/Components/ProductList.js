import React, { Component } from "react";
import PropTypes from "prop-types";
import Loading from "../pages/Loading";
import Product from "./Product";
import { getProducts } from "../actions/products";
import "./ProductList.scss";

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: this.props.products ? false : true
        };
    }

    componentDidMount() {
        let { getProducts } = this.props;
        getProducts();
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.products !== this.props.products &&
            this.props.products.data
        ) {
            this.setState({ loading: false });
        }
    }

    renderProducts() {
        return this.props.products.data.map(product => (
            <Product key={product.id} product={product} />
        ));
    }

    render() {
        let { loading } = this.state;
        if (loading) return <Loading />;
        return <div className="product-list row">{this.renderProducts()}</div>;
    }
}

ProductList.propTypes = {
    getProducts: PropTypes.func.isRequired,
    products: PropTypes.object.isRequired
};

const loadData = store => {
    return store.dispatch(getProducts());
};

export { loadData };
export default ProductList;
