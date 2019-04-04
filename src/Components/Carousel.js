import React, { Component } from "react";
import "./Carousel.scss";

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedImage: this.props.images[0]
        };
    }

    changeSelectedImage = image => e => {
        this.setState((prevState, props) => {
            return { selectedImage: image };
        });
    };

    renderImages() {
        let { images, name } = this.props;
        return images.map(image => (
            <img
                key={image.href}
                onClick={this.changeSelectedImage(image)}
                className="carouse-mini-image"
                src={image.href}
                alt={name}
            />
        ));
    }

    scrollLeft = () => {
        let $scrollDiv = document.getElementById("scrollCarousel");
        $scrollDiv.scrollBy(-200, 0);
    };

    scrollRight = () => {
        let $scrollDiv = document.getElementById("scrollCarousel");
        $scrollDiv.scrollBy(200, 0);
    };

    render() {
        let { selectedImage } = this.state;
        let { name } = this.props;
        return (
            <div className="carousel">
                <div className="carousel-content">
                    <div className="carousel-body">
                        <span
                            className="close"
                            onClick={this.props.displayCarousel}
                        >
                            &times;
                        </span>
                        <div className="carousel-selectedImage-container">
                            <img
                                className="carousel-main-image"
                                src={selectedImage.href}
                                alt={name}
                            />
                        </div>
                        <div className="carousel-scrollable-container">
                            <div className="child" onClick={this.scrollLeft}>
                                <i className="arrow left" />
                            </div>
                            <div
                                id="scrollCarousel"
                                className="carousel-mini-images child"
                            >
                                {this.renderImages()}
                            </div>
                            <div className="child" onClick={this.scrollRight}>
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
