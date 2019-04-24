// I'm still missing the timestamp in my header

import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
    <div class="header-text">
        <h2 class="header-title">Lambda School</h2>
        <p class="lambda-handle">@LambdaSchool</p>
        <p class="timestamp"> 22 apr</p>
    </div>
    ); 
}; 

export default HeaderTitle; 