import React from 'react';
import { FaDollarSign, FaTags, FaTruck, FaPaintBrush } from 'react-icons/fa';
import './Benefits.css';

const benefits = [
    {
        icon: <FaDollarSign />,
        title: 'Lowest Prices',
        description: 'Always the lowest prices and the best quality!'
    },
    {
        icon: <FaTags />,
        title: 'Bulk Discounts',
        description: 'Buy more, save more. The more you buy, the more you save.'
    },
    {
        icon: <FaTruck />,
        title: 'Express Delivery',
        description: 'Your order will be shipped within 24 hours!'
    },
    {
        icon: <FaPaintBrush />,
        title: 'Design Help',
        description: 'No logo or design? We will create your unique logo/design exactly the way you want it.'
    }
];

const Benefits = () => {
    return (
        <div className="benefits-container">
            <h2>Our Benefits</h2>
            <div className="benefits-grid">
                {benefits.map((benefit, index) => (
                    <div className="benefit-item" key={index}>
                        <div className="benefit-content">
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                        </div>
                        <div className="benefit-icon">{benefit.icon}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Benefits;
