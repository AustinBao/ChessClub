import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./gallerycarousel.css";
import img1 from "../../imgs/Gallery/1.jpg";
import img2 from "../../imgs/Gallery/2.jpg";
import img3 from "../../imgs/Gallery/3.jpg";
import img4 from "../../imgs/Gallery/4.jpg";
import img5 from "../../imgs/Gallery/5.jpg";
import img6 from "../../imgs/Gallery/6.jpg";
import img7 from "../../imgs/Gallery/7.jpg";
import img8 from "../../imgs/Gallery/8.jpg";
import img9 from "../../imgs/Gallery/9.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const GalleryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5500); // Every 5.5 seconds, change the image

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="gallery-container">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`gallery-${currentIndex}`}
          className="gallery-item"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
    </div>
  );
};

export default GalleryCarousel;
