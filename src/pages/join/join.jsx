import React from "react";
import "./join.css";

const Join = () => {
  return (
    <div class="main-content">
      
      <div class="title chesstext">
        How to Join
      </div>

      <div class="grid-container">

        <div class="item item3">
          <div class="joincards">
            <div class="jointitle">1. Membership Fee</div>
              <div class="joinbody">
                <br />
                New members have up to two free meetings before deciding to officially become a member 
                <br />
                <br />
                Club memberships last for the entirety of the academic year, being renewed annually
                <br />
                <br />
                Club fees can be paid via cash or e-transfer <span>ualbertachessclub@gmail.com</span>
              </div>
          </div>
        </div>

        <div class="item item1">
          <div class="joincards">
            <div class="jointitle">2. Go to club</div>
              <div class="joinbody">
                <br />
                <span>Location:</span> ECHA 1-420 
                <br />
                <br />
                <span>Time:</span> every Tuesday and Friday from 4 pm - 6 pm
              </div>
          </div>
        </div>

        <div class="item item2">
          <div class="joincards">
            <div class="jointitle">3. Play Chess!</div>
            <div class="joinbody">
              <br />
              Check out our discord for events and tournaments
            </div>
          </div>
        </div>

      </div>
    
    </div>
  )
};

export default Join;
