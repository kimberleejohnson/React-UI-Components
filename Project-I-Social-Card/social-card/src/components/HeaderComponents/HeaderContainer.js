import React from 'react';
import './Header.css';
import '../../../src/App.css'; 


// HeaderContainer needs to import all the Header components I need

// Icon 
import ImageThumbnail from './ImageThumbnail'; 

// Header title 
import HeaderTitle from './HeaderTitle';

// Header body 
import HeaderContent from './HeaderContent';

// Setting up my function to display 

const HeaderContainer = () => {
    return (
        <div className= "header-container">
        <ImageThumbnail /> 
        <HeaderTitle /> 
        <HeaderContent/> 
        </div>
    ); 
}; 

export default HeaderContainer; 