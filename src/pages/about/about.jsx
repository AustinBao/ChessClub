import React from "react";
import "./about.css";
import AboutUsCard from "../../components/aboutuscards/aboutuscards";

const About = () => {
  return (
    <div class="main-content">

       <div class="title">
          About us / FAQ
      </div>

      <div class="about-content">
        <p></p>
      </div>

      <div class="card-container">
        <AboutUsCard 
          header="WHO WE ARE"
          description="The University of Alberta Chess Club (UACC) is a passionate community of chess enthusiasts, ranging from beginners to experienced players. Our goal is to foster a welcoming and engaging environment where members can connect and enjoy the game of chess."
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

    </div>
  );
};

export default About;
