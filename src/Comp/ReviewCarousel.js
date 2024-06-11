import React from 'react';
import './ReviewCarousel.css';

const reviews = [
    {
        id: 1,
        text: "Alex and his team have covered our backs at the Columbia Restaurant Group—literally—for many years. They’re fast, flexible and offer a great value.",
        author: "Michael Kilgore",
        rating: 5
    },
    {
        id: 2,
        text: "We appreciate the prompt service we received when we needed an immediate turnaround of our work shirts being printed. Your representatives were able to get our shirts printed with quality & in time for us to start a very big new account. It was imperative that we looked professional.",
        author: "Linda Jones",
        rating: 5
    },
    {
        id: 3,
        text: "Great prices! Last minute print needed for Women’s Final Four. Best customer service and on-time. I highly recommend.",
        author: "John Doe",
        rating: 5
    },
    {
        id: 4,
        text: "We appreciate the prompt service we received when we needed an immediate turnaround of our work shirts being printed. Your representatives were able to get our shirts printed with quality & in time for us to start a very big new account. It was imperative that we looked professional.",
        author: "Linda Jones",
        rating: 5
    },
    {
        id: 5,
        text: "Great prices! Last minute print needed for Women’s Final Four. Best customer service and on-time. I highly recommend.",
        author: "John Doe",
        rating: 5
    },
    {
        id: 6,
        text: "We appreciate the prompt service we received when we needed an immediate turnaround of our work shirts being printed. Your representatives were able to get our shirts printed with quality & in time for us to start a very big new account. It was imperative that we looked professional.",
        author: "Linda Jones",
        rating: 5
    },
    {
        id: 7,
        text: "Great prices! Last minute print needed for Women’s Final Four. Best customer service and on-time. I highly recommend.",
        author: "John Doe",
        rating: 5
    },
    // Add more reviews as needed
];

const ReviewCarousel = () => {
    return (
        <div className="review-carousel-container">
            <div className="review-carousel">
                {reviews.map((review) => (
                    <div className="review-item" key={review.id}>
                        <div className="review-rating">
                            {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                        </div>
                        <p>{review.text}</p>
                        <h5>{review.author}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewCarousel;
