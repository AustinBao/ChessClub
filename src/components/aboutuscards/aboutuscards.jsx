import React from 'react';
import './aboutuscards.css';

const AboutUsCard = ({header, description}) => {
    return (
        <div class='about-us-card'>
            <h3>{header}</h3>
            <p>{description}</p>
        </div> 
    );
}
export default AboutUsCard