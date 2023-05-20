import React, { useState } from "react";
import "./album.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "react-slick";

function AlbumPage() {
  //const [selectedPicture, setSelectedPicture] = useState(null);
  const images = [
    "/assets/wed1.jpg",
    "/assets/wed2.jpg",
    "/assets/wedd.jpg",
    "/assets/deco2.jpg",
    "/assets/logo.jpg",
    "/assets/deco.jpg",
    "/assets/logo.jpg",
    "/assets/imagevow.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedPicture, setSelectedPicture] = useState(images[0]);

  const handlePictureClick = (index) => {
    setSelectedPicture(images[index]);
  };

  const handleCloseClick = () => {
    setSelectedPicture(null);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0, // Set the first image as default
    afterChange: (index) => {
      setCurrentImageIndex(index);
      setSelectedPicture(images[index]);
    },
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="bg-gradient-to-r from-black to-gray-900 min-h-screen text-gray-200 relative">
        <h1 className="text-white font-bold text-3xl py-10">Nos Photos</h1>
        <div className="pictures-container">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div
                key={index}
                className={`slider-image ${
                  currentImageIndex === index ? "active" : ""
                }`}
                onClick={() => handlePictureClick(index)}
              >
                <img
                  src={image}
                  alt="photo_mariage"
                  className="slider-image-img"
                />
              </div>
            ))}
          </Slider>
          {selectedPicture && (
            <div className="picture-modal">
              <div
                className="picture-modal-content"
                style={{ backgroundImage: `url(${selectedPicture})` }}
              >
                <button className="close-btn" onClick={handleCloseClick}>
                  Fermer l'album
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default AlbumPage;
