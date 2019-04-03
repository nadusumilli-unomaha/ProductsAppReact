import React, { Component } from "react";
import PropTypes from "prop-types";

class Product extends Component {
    render() {
        let { product } = this.props;
        return (
            <div className="product-item">
                <div>
                    <img
                        src={product.hero.href}
                        height={product.hero.height}
                        width={product.hero.width}
                        alt={product.name}
                    />
                </div>
                <div>{product.name}</div>
                <div>{product.price}</div>
            </div>
        );
    }
}

Product.propTypes = {
    product: PropTypes.object.isRequired
};

export default Product;
