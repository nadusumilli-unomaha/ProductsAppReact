import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Product.scss";
import Carousel from "./Carousel";

/**
 * Product class that display a single product to the screen.
 * @class Product
 * @params {None}
 * @returns {JSX.Element} jsx to render to screen.
 */
class Product extends Component {
    /**
     * constructor for the class.
     * @function constructor
     * @param {object} props - props for the class.
     * @returns {none}
     */
    constructor(props) {
        super(props);
        this.state = {
            image: props.product.hero,
            displayCarousel: false
        };
    }

    /**
     * renders the price in a secified format.
     * @function renderPrice
     * @param {object} price - price to render.
     * @returns {JSX.Element} jsx to render to screen.
     */
    renderPrice(price) {
        return (
            <>
                <span className="currency-symbol">$</span>
                {price.low} - <span className="currency-symbol">$</span>
                {price.high}
            </>
        );
    }

    /**
     * Swaps the images of hero on enter and on
     * exit by using the image param in components state.
     * @function changeImage
     * @param {none}
     * @returns {none}
     */
    changeImage = () => {
        if (this.props.product.images[1])
            this.setState(prevState => {
                if (prevState.image !== this.props.product.images[1])
                    return { image: this.props.product.images[1] };
                else return { image: this.props.product.hero };
            });
    };

    /**
     * Changes the state of toggleCarouselDisplay param
     * in the state on click which toggles the carousel.
     * @function toggleCarouselDisplay
     * @param {none}
     * @returns {none}
     */
    toggleCarouselDisplay = () => {
        this.setState(prevState => {
            return { displayCarousel: !prevState.displayCarousel };
        });
    };

    render() {
        let { product } = this.props;
        let { image } = this.state;
        return (
            <div data-test="component-product" className="product column">
                <div
                    data-test="product-image"
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
                    data-test="product-quicklook"
                    className="product-overlay"
                    onClick={this.toggleCarouselDisplay}
                >
                    Quicklook
                </span>
                <span data-test="product-name" className="product-name">
                    {product.name}
                </span>

                {product.priceRange.regular && (
                    <span
                        data-test="product-regular-price"
                        className="product-regular-price"
                    >
                        Sugg. Price:{" "}
                        {this.renderPrice(product.priceRange.regular)}
                    </span>
                )}

                {product.priceRange.selling && (
                    <span
                        data-test="product-selling-price"
                        className={`product-selling-price ${
                            product.priceRange.regular ? "discounted" : ""
                        }`}
                    >
                        Our Price:{" "}
                        {this.renderPrice(product.priceRange.selling)}
                    </span>
                )}

                {this.state.displayCarousel && (
                    <div data-test="component-carousel">
                        <Carousel
                            images={product.images}
                            name={product.name}
                            toggleCarouselDisplay={this.toggleCarouselDisplay}
                        />
                    </div>
                )}
            </div>
        );
    }
}

// Required props for the Product Component.
Product.propTypes = {
    product: PropTypes.object.isRequired
};

export default Product;
