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
            image="./src/imgs/exec/pres.png"
            altimage="PRESIDENT"
          />

          <PositionCard 
            name="Saswat Sahoo"
            role="VICE PRESIDENT"
            image="./src/imgs/exec/vicepres.png"
            altimage="VICE PRESIDENT"
          /> 

          <PositionCard 
            name="Tony Hu"
            role="VP EXTERNAL"
            image="./src/imgs/exec/vpexternal.png"
            altimage="VP EXTERNAL"
          />

          <PositionCard 
            name="Pranit Das"
            role="VP INTERNAL"
            image="./src/imgs/exec/vpinternal.png"
            altimage="VP INTERNAL"
          />

          <PositionCard 
            name="Scott Brown"
            role="COMMUNICATIONS"
            image="./src/imgs/exec/vpcom.png"
            altimage="VP COMMUNICATIONS"
          />

          <PositionCard 
            name="Robert Gibson"
            role="FINANCE"
            image="./src/imgs/exec/vpfinance.png"
            altimage="CO-VP EVENTS"
          />

          <PositionCard 
            name="Lavanya Jain"
            role="CO-VP EVENTS"
            image="./src/imgs/exec/vpevents.png"
            altimage="CO-VP EVENTS"
          />

          <PositionCard 
            name="Andi Superceanu"
            role="CO-VP EVENTS"
            image="./src/imgs/exec/vpevents2.png"
            altimage="CO-VP EVENTS"
          />
      </div>
      
  </div>
  )    
};

export default Executives;
