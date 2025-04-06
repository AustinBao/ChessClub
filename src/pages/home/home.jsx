import React from "react";
import "./home.css";
import GalleryCarousel from "../../components/gallerycarousel/gallerycarousel";

const Home = () => {
  return (
    <div class="main-content">

      <div className="fade-overlay fade-left"></div>
      <div className="fade-overlay fade-right"></div>

        <div class="hometitle">
          Welcome to the University of Alberta 
        </div>

        <div class="homesubtitle chesstext">
          Chess Club 
        </div>

        <a href="/join" class="joinbutton">
          <span>Join Now</span>
        </a>

        <GalleryCarousel />;
        
    </div>
  );
};

export default Home;
