import React from 'react';
import './Card.css';
import '../../../src/App.css'; 

// Card Container needs to import all the right elements

// Card banner photo 
import CardBanner from './CardBanner'; 
// Card copy 
import CardContent from './CardContent';

// Setting up my function to display 

const CardContainer = () => {
    return (
            <div className="card-container">
                <a href= "https://reactjs.org/" target="_blank">
                    <CardBanner /> 
                    <CardContent /> 
                </a>
            </div>  
    );
}

export default CardContainer; 