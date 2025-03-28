import React from "react";
import "./positions.css";

const PositionCard = ({ name, role, image, altimage }) => {
    return (
        <div class="card">
            <img src={image} alt={altimage} class="card-img"/>
            
            <div class="card-info">
                <div class="card-text">
                    <p class="card-title">{name}</p>
                    <p class="card-subtitle">{role}</p>
                </div>
            </div>

        </div>
    );
};

export default PositionCard;
