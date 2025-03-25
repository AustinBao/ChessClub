import React from "react";
import "./home.css";
import GalleryCarousel from "../../components/gallerycarousel/gallerycarousel";

const Home = () => {
  return (
    <div class="main-content">

      <div class="title">
        Welcome to the University of Alberta Chess Club
      </div>

      <img class="homelogo" src="./src/imgs/UACC.svg" alt="Logo"/>

      <GalleryCarousel />;
    
    </div>
  );
};

export default Home;
