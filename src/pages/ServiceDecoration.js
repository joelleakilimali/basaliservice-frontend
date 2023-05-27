import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Image } from "antd";

function ServiceDecoration() {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-black to-gray-900">
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            margin: 0,
            padding: 0,
            color: "white",
          }}
        >
          <div
            style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}
          >
            <div style={{ display: "flex" }}>
              <h1
                className="p-5 text-9xl"
                style={{
                  color: "white",
                  textAlign: "center",
                  marginBottom: "20px",
                  fontFamily: "'Dancing Script', cursive",
                }}
              >
                Service Decoration
              </h1>
            </div>

            <div className="my-10" style={{ marginBottom: "40px" }}>
              <h2
                style={{ marginBottom: "10px" }}
                className=" text-bold text-yellow-500 text-3xl my-5 py-8 "
              >
                Pourquoi opter pour la Decoration avec Nous ?
              </h2>
              <p className="text-xl">
                Notre équipe de décorateurs possède une vaste expérience et une
                créativité exceptionnelle dans la création d'ambiances uniques
                et personnalisées. Nous nous engageons à comprendre vos
                préférences, votre vision et vos aspirations, et à les traduire
                en une décoration de mariage qui reflète votre style et votre
                histoire d'amour.
                <p>
                  Nous attachons une grande importance aux détails et à la
                  perfection. Chaque élément de décoration est soigneusement
                  choisi et agencé pour créer une harmonie visuelle et une
                  atmosphère enchanteresse. Des fleurs exquises aux éclairages
                  captivants, nous veillons à ce que chaque détail soit pris en
                  compte pour rendre votre mariage exceptionnel.
                </p>
                <p>
                  Que vous recherchiez une décoration traditionnelle, moderne,
                  rustique ou thématique, nous avons une large gamme d'options
                  pour répondre à vos besoins. Nous vous offrons une sélection
                  variée de styles, de couleurs, de motifs et de matériaux pour
                  créer une décoration qui correspond parfaitement à vos goûts
                  et à l'ambiance que vous souhaitez créer.
                </p>
              </p>
            </div>

            <div className="my-20" style={{ marginBottom: "40px" }}>
              <h2
                className=" text-bold text-yellow-500 text-3xl my-5 py-8"
                style={{ marginBottom: "10px" }}
              >
                Petit Aperçu
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gridGap: "20px",
                }}
              >
                <Image
                  src="./assets/decoration8.jpg"
                  alt="Wedding"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <Image
                  src="./assets/decoration1.jpg"
                  alt="Wedding"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <Image
                  src="./assets/deco22.jpg"
                  alt="Wedding"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <Image
                  src="./assets/decoration7.jpg"
                  alt="Wedding"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                {/* Add more images here */}
              </div>
            </div>

            <div>
              <h2
                className=" text-bold text-yellow-500 text-3xl my-5 py-8 "
                style={{ marginBottom: "10px" }}
              >
                Cochez vos Preferences
              </h2>
              <div
                className="my-10 py-10"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gridGap: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <input type="checkbox" id="service1" />
                  <label htmlFor="service1" style={{ marginLeft: "10px" }}>
                    Accueillir les invités et les accompagner sur leurs table
                  </label>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <input type="checkbox" id="service2" />
                  <label htmlFor="service2" style={{ marginLeft: "10px" }}>
                    Distribuer les programs et d'autres supports necessaire
                  </label>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <input type="checkbox" id="service3" />
                  <label htmlFor="service3" style={{ marginLeft: "10px" }}>
                    Mettre a disposition un MC (Maitre de Ceremonie)
                  </label>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <input type="checkbox" id="service3" />
                  <label htmlFor="service3" style={{ marginLeft: "10px" }}>
                    Assister a l'arrangement et placement des chaises et tables
                  </label>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <input type="checkbox" id="service1" />
                  <label htmlFor="service1" style={{ marginLeft: "10px" }}>
                    Accueillir les invités et les accompagner sur leurs table
                  </label>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <input type="checkbox" id="service3" />
                  <label htmlFor="service3" style={{ marginLeft: "10px" }}>
                    Mettre a disposition un MC (Maitre de Ceremonie)
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ServiceDecoration;
