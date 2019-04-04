import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Product.scss";
import Carousel from "./Carousel";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: props.product.hero,
            displayCarousel: false
        };
    }
    renderPrice(price) {
        return (
            <>
                <span className="currency-symbol">$</span>
                {price.low} - <span className="currency-symbol">$</span>
                {price.high}
            </>
        );
    }

    changeImage = () => {
        if (this.props.product.images[1])
            this.setState(prevState => {
                if (prevState.image !== this.props.product.images[1])
                    return { image: this.props.product.images[1] };
                else return { image: this.props.product.hero };
            });
    };

    displayCarousel = () => {
        this.setState(prevState => {
            return { displayCarousel: !prevState.displayCarousel };
        });
    };

    render() {
        let { product } = this.props;
        let { image } = this.state;
        return (
            <div className="product column">
                <div
                    className="product-image"
                    onMouseEnter={this.changeImage}
                    onMouseLeave={this.changeImage}
                >
                    <img
                        src={image.href}
                        alt={product.name}
                        height={image.height}
                        width={image.width}
                    />
                </div>
                <span
                    className="product-overlay"
                    onClick={this.displayCarousel}
                >
                    Quicklook
                </span>
                <span className="product-name">{product.name}</span>
                <span className="product-regular-price">
                    {product.priceRange.regular && (
                        <>
                            Sugg. Price:{" "}
                            {this.renderPrice(product.priceRange.regular)}
                        </>
                    )}
                </span>
                <span
                    className={`product-selling-price ${
                        product.priceRange.regular ? "discounted" : ""
                    }`}
                >
                    {product.priceRange.selling && (
                        <>
                            Our Price:{" "}
                            {this.renderPrice(product.priceRange.selling)}
                        </>
                    )}
                </span>
                {this.state.displayCarousel && (
                    <Carousel
                        images={product.images}
                        name={product.name}
                        displayCarousel={this.displayCarousel}
                    />
                )}
            </div>
        );
    }
}

Product.propTypes = {
    product: PropTypes.object.isRequired
};

export default Product;
