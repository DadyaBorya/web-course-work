import React, {useId} from 'react';
import {Carousel} from "react-bootstrap";
import generateId from "../../utils";

const CarouselView = ({images, height, className, prefixSrc = "", theme}) => {
    return (
        <Carousel data-bs-theme={theme} className={className}>
                {images.map((image, index) => (
                    <Carousel.Item key={image.id ? image.id : Date.now() + index} style={{height: height}}>
                        <img
                            className="w-100 h-100"
                            src={`${prefixSrc}${image.src}`}
                            style={{objectFit: "contain"}}
                            alt={"car"}/>
                    </Carousel.Item>
                ))}
        </Carousel>
    );
};

export default CarouselView;