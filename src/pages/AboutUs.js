import React from "react";
import "./AboutUsPage.css"; // Import the CSS file for styling
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Image } from "antd";

const AboutUsPage = () => {
  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <div className="bg-gradient-to-r from-black to-gray-900 min-h-screen text-white">
        <h1 className="heading p-10 text-yellow-400  ">A propos de Nous</h1>
        <div className="content">
          <div className="flex flex-col  ">
            <h2 className="section-heading text-yellow-400">
              Qui sommes-nous ?
            </h2>
            <p className=" text-xl mx-48">
              Basaliservice Agence événementielle, est une agence créé par un
              groupe des jeunes ambitueux et motivés pour le changement. Née
              d'une idée tirée d'ne prestation lors d'une soirée dansante d'un
              mariage d'un jeune couple en 2021. C'est après cette prestation
              que nous jeunes, avions souhaité de créer cette agence.
            </p>
          </div>
          <div className="flex flex-col  ">
            <h2 className="section-heading text-yellow-400">Notre Mission </h2>
            <p className="  text-xl mx-48">
              Notre mission est d'assurer et de vous accompagner dans la
              réussite de toutes vos activités en assurant la couverture des
              services tels que le protocole, la sécurité; le maître de
              cérémonie, fille d'honneur et la décoration.
            </p>
          </div>

          <h2 className="section-heading text-yellow-400">Nos valeurs</h2>
          <ul className="text-xl">
            <li>
              Excellence: Nous nous engageons à offrir l'excellence dans tout ce
              que nous faisons.
            </li>
            <li>
              Integrité: Nous opérons avec le plus haut niveau d'intégrité et
              normes éthiques.
            </li>
            <li>
              Collaboration: Nous croyons au pouvoir de la collaboration et
              travail en équipe.
            </li>
            <li>
              Innovation: Nous encourageons une culture de l'innovation et
              adoptons des nouvelles idées.
            </li>
            <li>
              Orientation client : Nous accordons la priorité aux besoins de nos
              clients et nous nous efforçons d'apporter les meilleures
              solutions.
            </li>
          </ul>
          <div className="my-20" style={{ marginBottom: "40px" }}>
            {/* <h2
              className=" text-bold text-yellow-400 text-3xl my-5 py-8"
              style={{ marginBottom: "10px" }}
            >
              Nos contacts
            </h2> */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gridGap: "20px",
              }}
            >
              {/* <Image
                src="./assets/BSprotocol13.jpg"
                alt="Nos contacts"
                style={{
                  width: "20%",
                  height: "100px",
                  objectFit: "fill",
                  marginLeft: "625px",
                  marginBottom: "30px",
                }}
              /> */}
              {/* Add more images here */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
