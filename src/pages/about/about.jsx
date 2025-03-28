import React from "react";
import "./about.css";
import AboutUsCard from "../../components/aboutuscards/aboutuscards";

const About = () => {
  return (
    <div class="main-content">

      <div class="title chesstext">
        About us / FAQ
      </div>

      <div class="about-content">
        <p></p>
      </div>

      <div class="card-container">
        <AboutUsCard 
          header="WHO WE ARE"
          description="The University of Alberta Chess Club (UACC) is a passionate community full of chess enthusiasts. Our goal is to foster a welcoming and engaging environment where everyone can enjoy the game of chess!"
        />

        <AboutUsCard 
          header="WHAT WE DO"
          description="At UACC, we offer a variety of chess-related activities for all skill levels. Whether you're looking for casual games, fun puzzles, or competitive tournaments, we have something for everyone."
        />

        <AboutUsCard 
          header="WHEN & WHERE WE MEET"
          description="We typically meet in ECHA 1-420 every Tuesday and Friday from 4 pm - 6 pm, but we also organize special events and tournaments throughout the year. Stay updated by following our social media!"
        />

        <AboutUsCard 
          header="WHO CAN JOIN?"
          description="Anyone with an interest in chess is welcome! Whether you're a University of Alberta student or an alumnus, you’re invited to be a part of our community. No prior experience is required."
        />
      </div>

      <div class="title chesstext">
        Accolades
      </div>

      <div class="notification">
        <div class="notiglow"></div>
        <div class="notiborderglow"></div>
        <div class="notititle">Canadian University Chess Championships - 01/16/2021</div>
        <div class="notibody">Preliminary round - 4th Place</div>
      </div>

      <div class="notification">
        <div class="notiglow"></div>
        <div class="notiborderglow"></div>
        <div class="notititle">Canadian University Chess Championships - 01/17/2021</div>
        <div class="notibody">Silver Division - 2nd Place</div>
      </div>

      <div class="notification">
        <div class="notiglow"></div>
        <div class="notiborderglow"></div>
        <div class="notititle">International university wcleague blitz tournament - 04/25/2021</div>
        <div class="notibody">24th place out of 35 teams</div>
      </div>

      <div class="notification">
        <div class="notiglow"></div>
        <div class="notiborderglow"></div>
        <div class="notititle">International university wcleague blitz tournament - 07/03/2021</div>
        <div class="notibody">21st place out of 46 teams (3rd in North America)</div>
      </div>

    </div>
  );
};

export default About;
