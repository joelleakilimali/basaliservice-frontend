import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Image } from "antd";

function ServiceSecurite() {
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
                Service Securité
              </h1>
            </div>

            <div className="my-10" style={{ marginBottom: "40px" }}>
              <h2
                style={{ marginBottom: "10px" }}
                className=" text-bold text-yellow-500 text-3xl my-5 py-8 "
              >
                Pourquoi opter pour le service de securité ?
              </h2>
              <p className="text-xl">
                Lors d'un mariage, il y a souvent un grand nombre d'invités
                présents. Un service de sécurité veillera à ce que tous les
                invités se sentent en sécurité et à l'aise pendant l'événement.
                Ils peuvent surveiller les entrées et sorties, contrôler l'accès
                aux zones restreintes et prévenir les situations potentiellement
                dangereuses. Les mariages sont souvent des événements ouverts où
                des personnes non invitées peuvent essayer de se faufiler. Un
                service de sécurité peut empêcher les intrusions non autorisées,
                assurant ainsi que seules les personnes invitées ont accès à
                l'événement. Les mariages peuvent impliquer des objets de valeur
                tels que des cadeaux, des bijoux et d'autres accessoires
                coûteux. Un service de sécurité peut surveiller ces objets et
                prévenir les vols potentiels, assurant ainsi la tranquillité
                d'esprit des mariés et de leurs invités.
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
                  src="./assets/security3.jpg"
                  alt="Wedding"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <Image
                  src="./assets/security4.jpg"
                  alt="Wedding"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <Image
                  src="./assets/security1.jfif"
                  alt="Wedding"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <Image
                  src="./assets/security6.jpg"
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

export default ServiceSecurite;
