import React, { Component } from "react";
import PropTypes from "prop-types";
import Loading from "../pages/Loading";
import Product from "./Product";

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            loading: true
        };
    }

    componentDidMount() {
        let { getProducts } = this.props;
        getProducts();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.products.data !== this.props.products.data) {
            this.setState((prevState, props) => {
                return {
                    products: props.products.data,
                    loading: !prevState.loading
                };
            });
        }
    }

    render() {
        let { loading, products } = this.state;
        if (loading) return <Loading />;
        return (
            <div>
                {products.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        );
    }
}

ProductList.propTypes = {
    getProducts: PropTypes.func.isRequired,
    getOneProduct: PropTypes.func.isRequired,
    products: PropTypes.object.isRequired
};

export default ProductList;
