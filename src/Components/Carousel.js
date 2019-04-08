import React, { Component } from "react";
import "./Carousel.scss";

/**
 * Carousel class that display a carousel
 * @class Carousel
 * @params {None}
 * @returns {JSX.Element} jsx to render to screen.
 */
class Carousel extends Component {
    /**
     * constructor for the class.
     * @function constructor
     * @param {object} props - props for the class.
     * @returns {none}
     */
    constructor(props) {
        super(props);
        this.state = {
            selectedImage: this.props.images[0]
        };
    }

    /**
     * Sets the current selected image in state
     * to the image that was selected.
     * @function changeSelectedImage
     * @param {Object} image - the image that is selected.
     * @returns {none}
     */
    changeSelectedImage = image => e => {
        this.setState((prevState, props) => {
            return { selectedImage: image };
        });
    };

    /**
     * Renders all the images in the list passed from product
     * @function renderImages
     * @param {None}
     * @returns {JSX.Element} jsx to render to screen.
     */
    renderImages() {
        let { images, name } = this.props;
        return images.map((image, idx) => (
            <img
                key={idx}
                onClick={this.changeSelectedImage(image)}
                className="carouse-mini-image"
                src={image.href}
                alt={name}
            />
        ));
    }

    /**
     * Scroll the images in the carousel to the left.
     * @function scrollLeft
     * @param {None}
     * @returns {None}
     */
    scrollLeft = () => {
        let $scrollDiv = document.getElementById("scrollCarousel");
        $scrollDiv.scrollBy(-200, 0);
    };

    /**
     * Scroll the images in the carousel to the right.
     * @function scrollRight
     * @param {None}
     * @returns {None}
     */
    scrollRight = () => {
        let $scrollDiv = document.getElementById("scrollCarousel");
        $scrollDiv.scrollBy(200, 0);
    };

    /**
     * Close the carousel on click close btn.
     * @function closeCarousel
     * @param {None}
     * @returns {None}
     */
    closeCarousel = () => {
        this.props.toggleCarouselDisplay();
    };

    render() {
        let { selectedImage } = this.state;
        let { name } = this.props;
        return (
            <div data-test="component-carousel" className="carousel">
                <div className="carousel-content">
                    <div className="carousel-body">
                        <span
                            data-test="carousel-close-btn"
                            className="close"
                            onClick={this.closeCarousel}
                        >
                            &times;
                        </span>
                        <div
                            data-test="carousel-image"
                            className="carousel-selectedImage-container"
                        >
                            <img
                                className="carousel-main-image"
                                src={selectedImage.href}
                                alt={name}
                            />
                        </div>
                        <div className="carousel-scrollable-container">
                            <div
                                className="child arrow-div"
                                onClick={this.scrollLeft}
                            >
                                <i className="arrow left" />
                            </div>
                            <div
                                data-test="small-images"
                                id="scrollCarousel"
                                className="carousel-mini-images child"
                            >
                                {this.renderImages()}
                            </div>
                            <div
                                className="child arrow-div"
                                onClick={this.scrollRight}
                            >
                                <i className="arrow right" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel;
