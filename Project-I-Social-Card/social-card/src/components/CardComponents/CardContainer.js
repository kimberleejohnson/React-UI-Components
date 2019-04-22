import React from 'react';
import './Card.css';

// Card Container needs to import all the right elements

// Card banner photo 
import CardBanner from './CardBanner'; 

// Card copy 

// Setting up my function to display 

const CardContainer = () => {
    return (
        <div className="card-container">
        <CardBanner /> 
        </div>
    );
}

export default CardContainer; 