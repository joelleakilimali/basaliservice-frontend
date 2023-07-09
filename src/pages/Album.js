import React, { useState } from "react";
import "./album.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "react-slick";

function AlbumPage() {
  //const [selectedPicture, setSelectedPicture] = useState(null);
  const images = [
    "/assets/logo.jpg",
    "/assets/BSprotocol13.jpg",
    "/assets/BSprotocol8.jpg",
    "/assets/BSprotocol.jpg",
    "/assets/BSprotocol3.jpg",
    "/assets/BSprotocol5.jpg",
    "/assets/BSprotocol6.jpg",
    "/assets/BSprotocol7.jpg",
    "/assets/BSprotocol9.jpg",
    "/assets/BSprotocol10.jpg",
    "/assets/BSprotocol11.jpg",
    "/assets/BSprotocol12.jpg",
    "/assets/BSprotocol14.jpg",
    "/assets/BSprotocol15.jpg",
    "/assets/BSprotocol16.jpg",
    "/assets/BSprotocol17.jpg",
    "/assets/BSprotocol19.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedPicture, setSelectedPicture] = useState(images[0]);

  const handlePictureClick = (index) => {
    setSelectedPicture(images[index]);
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
          <div className="picture-modal">
            <div
              className="picture-modal-content"
              style={{ backgroundImage: `url(${selectedPicture})` }}
            ></div>
          </div>
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
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default AlbumPage;
