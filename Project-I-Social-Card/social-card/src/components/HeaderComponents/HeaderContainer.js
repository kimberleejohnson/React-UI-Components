import React from 'react';
import './Header.css';


// HeaderContainer needs to import all the Header components I need

// Icon 
import ImageThumbnail from './ImageThumbnail'; 
import HeaderTitle from './HeaderTitle';

// Header text wrapper

// Header text title 

// Header text body 

// Setting up my function to display 

const HeaderContainer = () => {
    return (
        <div className= "card-container">
        <ImageThumbnail /> 
        <HeaderTitle /> 
        </div>
    ); 
}; 

export default HeaderContainer; 