import React from "react";
import "./executives.css";
import PositionCard from "../../components/positions/positions";


const Executives = () => {
  return (
    <div class="main-content">

      <div class="title chesstext">
          Executive Team
      </div>

      <div class="exec-container">
          <PositionCard 
            name="Benjamin Pan"
            role="PRESIDENT"
            image="/exec/pres.png"
            altimage="PRESIDENT"
          />

          <PositionCard 
            name="Saswat Sahoo"
            role="VICE PRESIDENT"
            image="/exec/vicepres.png"
            altimage="VICE PRESIDENT"
          /> 

          <PositionCard 
            name="Tony Hu"
            role="VP EXTERNAL"
            image="/exec/vpexternal.png"
            altimage="VP EXTERNAL"
          />

          <PositionCard 
            name="Pranit Das"
            role="VP INTERNAL"
            image="/exec/vpinternal.png"
            altimage="VP INTERNAL"
          />

          <PositionCard 
            name="Scott Brown"
            role="COMMUNICATIONS"
            image="/exec/vpcom.png"
            altimage="VP COMMUNICATIONS"
          />

          <PositionCard 
            name="Robert Gibson"
            role="FINANCE"
            image="/exec/vpfinance.png"
            altimage="CO-VP EVENTS"
          />

          <PositionCard 
            name="Lavanya Jain"
            role="CO-VP EVENTS"
            image="/exec/vpevents.png"
            altimage="CO-VP EVENTS"
          />

          <PositionCard 
            name="Andi Superceanu"
            role="CO-VP EVENTS"
            image="/exec/vpevents2.png"
            altimage="CO-VP EVENTS"
          />
      </div>
      
  </div>
  )    
};

export default Executives;
