import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Image } from "antd";

function ServiceParticulier() {
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
                Service Protocol
              </h1>
            </div>

            <div className="my-10" style={{ marginBottom: "40px" }}>
              <h2
                style={{ marginBottom: "10px" }}
                className=" text-bold text-yellow-500 text-3xl my-5 py-8 "
              >
                Pourquoi opter pour les protocols ?
              </h2>
              <p className="text-xl">
                Les huissiers jouent un rôle crucial pour garantir une cérémonie
                de mariage fluide et bien organisée. Ils aident les invités à
                trouver leurs places, fournissent des indications, distribuent
                les programmes et gèrent toute situation imprévue. Les huissiers
                contribuent à créer une atmosphère accueillante, veillant à ce
                que les invités se sentent à l'aise et bien informés tout au
                long de l'événement. Leur présence ajoute une touche d'élégance
                et de professionnalisme au mariage, en en faisant une expérience
                mémorable pour tous les participants.
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
                  src="./assets/protocol4.jfif"
                  alt="Wedding"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <Image
                  src="./assets/protocol2.jpg"
                  alt="Wedding"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <Image
                  src="./assets/protocol1.jfif"
                  alt="Wedding"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <Image
                  src="./assets/protocol3.jfif"
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

export default ServiceParticulier;
