import React from 'react';
import './MarqueeComponent.css';
import { FaHeadphonesAlt, FaTruck, FaDollarSign, FaUsers, FaPhone } from 'react-icons/fa';

const MarqueeComponent = () => {
    const marqueeItems = [
        { icon: <FaHeadphonesAlt />, text: 'Help' },
        { icon: <FaUsers />, text: 'Говорим на русском :)' },
        { icon: <FaDollarSign />, text: 'Lowest Prices' },
        { icon: <FaTruck />, text: 'Fast Delivery' },
        { icon: <FaPhone />, text: 'Customer Service 24/7' },
        { icon: <FaUsers />, text: 'Design Help' },
        { icon: <FaHeadphonesAlt />, text: 'Help' },
        { icon: <FaUsers />, text: 'Говорим на русском :)' },
        { icon: <FaDollarSign />, text: 'Lowest Prices' },
        { icon: <FaTruck />, text: 'Fast Delivery' },
        { icon: <FaPhone />, text: 'Customer Service 24/7' },
        { icon: <FaUsers />, text: 'Design Help' },
        { icon: <FaHeadphonesAlt />, text: 'Help' },
        { icon: <FaUsers />, text: 'Говорим на русском :)' },
        { icon: <FaDollarSign />, text: 'Lowest Prices' },
        { icon: <FaTruck />, text: 'Fast Delivery' },
        { icon: <FaPhone />, text: 'Customer Service 24/7' },
        { icon: <FaUsers />, text: 'Design Help' },
        { icon: <FaHeadphonesAlt />, text: 'Help' },
        { icon: <FaUsers />, text: 'Говорим на русском :)' },
        { icon: <FaDollarSign />, text: 'Lowest Prices' },
        { icon: <FaTruck />, text: 'Fast Delivery' },
        { icon: <FaPhone />, text: 'Customer Service 24/7' },
        { icon: <FaUsers />, text: 'Design Help' },
        { icon: <FaHeadphonesAlt />, text: 'Help' },
        { icon: <FaUsers />, text: 'Говорим на русском :)' },
        { icon: <FaDollarSign />, text: 'Lowest Prices' },
        { icon: <FaTruck />, text: 'Fast Delivery' },
        { icon: <FaPhone />, text: 'Customer Service 24/7' },
        { icon: <FaUsers />, text: 'Design Help' },
        { icon: <FaHeadphonesAlt />, text: 'Help' },
        { icon: <FaUsers />, text: 'Говорим на русском :)' },
        { icon: <FaDollarSign />, text: 'Lowest Prices' },
        { icon: <FaTruck />, text: 'Fast Delivery' },
        { icon: <FaPhone />, text: 'Customer Service 24/7' },
        { icon: <FaUsers />, text: 'Design Help' },
        { icon: <FaHeadphonesAlt />, text: 'Help' },
        { icon: <FaUsers />, text: 'Говорим на русском :)' },
        { icon: <FaDollarSign />, text: 'Lowest Prices' },
        { icon: <FaTruck />, text: 'Fast Delivery' },
        { icon: <FaPhone />, text: 'Customer Service 24/7' },
        { icon: <FaUsers />, text: 'Design Help' },
        { icon: <FaHeadphonesAlt />, text: 'Help' },
        { icon: <FaUsers />, text: 'Говорим на русском :)' },
        { icon: <FaDollarSign />, text: 'Lowest Prices' },
        { icon: <FaTruck />, text: 'Fast Delivery' },
        { icon: <FaPhone />, text: 'Customer Service 24/7' },
        { icon: <FaUsers />, text: 'Design Help' },
        { icon: <FaHeadphonesAlt />, text: 'Help' },
        { icon: <FaUsers />, text: 'Говорим на русском :)' },
        { icon: <FaDollarSign />, text: 'Lowest Prices' },
        { icon: <FaTruck />, text: 'Fast Delivery' },
        { icon: <FaPhone />, text: 'Customer Service 24/7' },
        { icon: <FaUsers />, text: 'Design Help' },
        { icon: <FaHeadphonesAlt />, text: 'Help' },
        { icon: <FaUsers />, text: 'Говорим на русском :)' },
        { icon: <FaDollarSign />, text: 'Lowest Prices' },
        { icon: <FaTruck />, text: 'Fast Delivery' },
        { icon: <FaPhone />, text: 'Customer Service 24/7' },
        { icon: <FaUsers />, text: 'Design Help' },
    ];

    return (
        <div className="marquee-container">
            <div className="marquee">
                <div className="marquee-content">
                    {marqueeItems.map((item, index) => (
                        <div className="marquee-item" key={index}>
                            {item.icon}
                            <span>{item.text}</span>
                        </div>
                    ))}
                    {/* Duplicate items for seamless scrolling */}
                    {marqueeItems.map((item, index) => (
                        <div className="marquee-item" key={index + marqueeItems.length}>
                            {item.icon}
                            <span>{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MarqueeComponent;
