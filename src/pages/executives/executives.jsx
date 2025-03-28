import React from "react";
import "./executives.css";
import PositionCard from "../../components/positions/positions";

const Executives = () => {
  return (
    <div class="main-content">

      <div class="title chesstext">
          Meet the Executive Team
      </div>

      <div class="exec-container">
          <PositionCard 
            name="Benjamin Pan"
            role="PRESIDENT"
            image="./src/imgs/ChessPieces/Chess_klt45.svg"
            altimage="PRESIDENT"
          />

          <PositionCard 
            name="Saswat Sahoo"
            role="VICE PRESIDENT"
            image="./src/imgs/ChessPieces/Chess_qlt45.svg"
            altimage="VICE PRESIDENT"
          /> 

          <PositionCard 
            name="Tony Hu"
            role="VP EXTERNAL"
            image="./src/imgs/ChessPieces/Chess_rlt45.svg"
            altimage="VP EXTERNAL"
          />

          <PositionCard 
            name="Pranit Das"
            role="VP INTERNAL"
            image="./src/imgs/ChessPieces/Chess_blt45.svg"
            altimage="VP INTERNAL"
          />

          <PositionCard 
            name="Scott Brown"
            role="COMMUNICATIONS"
            image="./src/imgs/ChessPieces/Chess_nlt45.svg"
            altimage="VP COMMUNICATIONS"
          />

          <PositionCard 
            name="Lavanya Jain"
            role="CO-VP EVENTS"
            image="./src/imgs/ChessPieces/Chess_plt45.svg"
            altimage="CO-VP EVENTS"
          />

          <PositionCard 
            name="Andi Superceanu"
            role="CO-VP EVENTS"
            image="./src/imgs/ChessPieces/Chess_plt45.svg"
            altimage="CO-VP EVENTS"
          />
      </div>
      
  </div>
  )    
};

export default Executives;
