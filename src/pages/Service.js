import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./service.css";
function Service() {
  const listService = [
    {
      service: "Protocole Anniveraire Par heure",
      prixUnitaire: 10,
    },
    {
      service: "Protocole Mariage",
      prixUnitaire: 25,
      prixVintaine: 500,
      prixCinquantaine: 1250,
    },
    {
      service: "Service Decoration Mariage",
      prixUnitaire: 0,
      prixVintaine: 0,
      prixCinquantaine: 0,
    },
    {
      service: "Service Securite",
      prixUnitaire: 25,
      prixVintaine: 500,
      prixCinquantaine: 1250,
    },
    {
      service: "Protocole Formation Par heure",
      prixUnitaire: 10,
    },
    {
      service: "Protocole Conference Par heure",
      prixUnitaire: 10,
    },
    {
      service: "Service Decoration Anniversaire",
      prixUnitaire: 0,
      prixVintaine: 0,
      prixCinquantaine: 0,
    },
  ];

  const [selectedService, setSelectedService] = useState(null);

  const handleMouseEnter = (service) => {
    setSelectedService(service);
  };

  const handleMouseLeave = () => {
    setSelectedService(null);
  };

  const handleClick = (service) => {
    console.log(`Clicked on ${service.service}`);
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="bg-gradient-to-r from-black to-gray-900 min-h-screen text-gray-200 relative">
        <h1 className="text-white font-bold text-3xl py-10">Nos Tarifs</h1>
        <div className="mx-10 my-10">
          <div className="containerService m-10 ">
            {listService.map((service, index) => (
              <div
                key={index}
                className={` w-[300px] h-[250px] list-item ${
                  selectedService === service ? "active" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(service)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(service)}
              >
                <p className="text-3xl font-bold  text-yellow-500">
                  {service.service}
                </p>
                <p>Prix Unitaire: ${service.prixUnitaire}</p>
                <p>Prix pour 20 personnes: ${service.prixVintaine}</p>
                <p>Prix pour 50 personnes: ${service.prixCinquantaine}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className=" text-3xl">
            Vous ne vous retrouvez pas dans le Tarif ? Personalisez le votre ...
          </h2>
          <div className=" text-lg my-10">
            <div
              className="flex justify-around p-3  "
              style={{ alignItems: "center" }}
            >
              <h1 className="mx-5"> Type de Service:</h1>
              <input
                className="w-[500px] p-3"
                type="text"
                placeholder=" Enterrement de vie de jeune fille"
              />
            </div>
            <div
              className="flex  justify-around p-3"
              style={{ alignItems: "center" }}
            >
              <h1 className="mx-5"> Nombre de Personne:</h1>
              <input
                className="w-[500px] p-3"
                type="number"
                placeholder="100"
              />
            </div>
            <div
              className="flex justify-around p-3 "
              style={{ alignItems: "center" }}
            >
              <h1 className="mx-5"> Type d'espace:</h1>
              <select className="w-[500px] p-3">
                <option value="salle">Salle de fete</option>
                <option value="espace_ouvert">Espace Ouvert</option>
                <option value="autour_piscine">Autours de la piscine</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Service;
