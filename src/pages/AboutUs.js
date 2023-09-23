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
        <h1 className="heading p-5 text-yellow-400 text-3xl text-center">
          A propos de Nous
        </h1>
        <div className="content mx-5 my-10">
          <div className="mb-10">
            <h2 className="section-heading text-yellow-400 text-2xl">
              Qui sommes-nous ?
            </h2>
            <p className="text-xl">
              Basaliservice Agence événementielle, est une agence créée par un
              groupe de jeunes ambitieux et motivés pour le changement. Née
              d'une idée tirée d'une prestation lors d'une soirée dansante d'un
              mariage d'un jeune couple en 2021. C'est après cette prestation
              que nous jeunes, avons souhaité créer cette agence.
            </p>
          </div>
          <div className="mb-10">
            <h2 className="section-heading text-yellow-400 text-2xl">
              Notre Mission
            </h2>
            <p className="text-xl">
              Notre mission est d'assurer et de vous accompagner dans la
              réussite de toutes vos activités en assurant la couverture des
              services tels que le protocole, la sécurité; le maître de
              cérémonie, fille d'honneur et la décoration.
            </p>
          </div>
          <div className="mb-10">
            <h2 className="section-heading text-yellow-400 text-2xl">
              Nos valeurs
            </h2>
            <ul className="text-xl">
              <li>
                <span className="text-yellow-400">&#10003;</span> Excellence:
                Nous nous engageons à offrir l'excellence dans tout ce que nous
                faisons.
              </li>
              <li>
                <span className="text-yellow-400">&#10003;</span> Intégrité:
                Nous opérons avec le plus haut niveau d'intégrité et de normes
                éthiques.
              </li>
              <li>
                <span className="text-yellow-400">&#10003;</span> Collaboration:
                Nous croyons au pouvoir de la collaboration et du travail en
                équipe.
              </li>
              <li>
                <span className="text-yellow-400">&#10003;</span> Innovation:
                Nous encourageons une culture de l'innovation et adoptons de
                nouvelles idées.
              </li>
              <li>
                <span className="text-yellow-400">&#10003;</span> Orientation
                client : Nous accordons la priorité aux besoins de nos clients
                et nous nous efforçons d'apporter les meilleures solutions.
              </li>
            </ul>
          </div>
          <div className="my-10">
            <h2 className="text-bold text-yellow-400 text-3xl mb-5 py-2 text-center">
              Nos contacts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              <Image
                src="./assets/BSprotocol13.jpg"
                alt="Nos contacts"
                className="w-full h-auto"
              />
              {/* Ajoutez plus d'images ici */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
