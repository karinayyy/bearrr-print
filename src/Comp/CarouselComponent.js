import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselComponent.css';
import slide1 from '../img/slide1.jpg'; // Use your actual image paths
import slide2 from '../img/slide1.jpg';
import slide3 from '../img/slide1.jpg';

const CarouselComponent = () => {
    return (
        <Carousel className="full-height-carousel">
            <Carousel.Item>
                <img
                    src={slide1}
                    className="d-block w-100"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>Custom promotional products for Your Business</h1>
                    <p>
                        Looking for an easy way to reach new customers and build a buzz around your business? You found it. Be #1
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={slide2}
                    className="d-block w-100"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h1>Custom promotional products for Your Business</h1>
                    <p>
                        Looking for an easy way to reach new customers and build a buzz around your business? You found it. Be #1
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={slide3}
                    className="d-block w-100"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h1>Custom promotional products for Your Business</h1>
                    <p>
                        Looking for an easy way to reach new customers and build a buzz around your business? You found it. Be #1
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselComponent;
