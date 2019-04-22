import React from 'react';
import './Card.css';

// Card Container needs to import all the right elements

// Card banner photo 
import CardBanner from './CardBanner'; 
import CardContent from './CardContent';

// Card copy 

// Setting up my function to display 

const CardContainer = () => {
    return (
        <a href="https://www.reactjs.org">
            <div className="card-container">
            <CardBanner /> 
            <CardContent /> 
            </div>
        </a>
    );
}

export default CardContainer; 