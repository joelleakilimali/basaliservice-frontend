import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Image } from "antd";
import CheckboxList from "../components/CheckboxList";

function ServiceMaitreceremonie() {
  const services = [
    "Presentation",
    "Animation ",
    "Gestion des imprevus",
    "Animation ",
  ];
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
                className="p-5 text-8xl"
                style={{
                  color: "white",
                  textAlign: "center",
                  marginBottom: "20px",
                  fontFamily: "'Dancing Script', cursive",
                }}
              >
                Maître de Cérémonie
              </h1>
            </div>

            <div className="my-10" style={{ marginBottom: "40px" }}>
              <h2
                style={{ marginBottom: "10px" }}
                className=" text-bold text-yellow-500 text-3xl my-5 py-8 "
              >
                Pourquoi opter pour un Maître de cérémonie avec Nous ?
              </h2>
              <p className="text-xl">
                Notre Maître de cérémonie est un porte-parole dans vos
                cérémonies qui vous accompagne dans la créactivité et
                l'animation des évenements. L'officiant construit la cérémonie
                autours des mariés, de ce qu'ils aiment et du message qu'ils
                souhaitent communiquer à leurs invités.
                <p>
                  Nous veillerons à ce que le planning soit respecté, mais aussi
                  pour assurer une bonne ambiance au sein de l'assistance.
                </p>
                <p>
                  Que vous recherchiez un maître de cérémonie pour vos
                  activités, Nous avons une équipe de professionels dont le
                  travail sera remarqué dans le bon déroulement de l'événement
                  ainsi qu'à l'animation.
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
                  src="./assets/c1.jpg"
                  alt="Wedding"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <Image
                  src="./assets/c2.jpg"
                  alt="Wedding"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <Image
                  src="./assets/c3.jpg"
                  alt="Wedding"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <Image
                  src="./assets/c4.jpg"
                  alt="Wedding"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                {/* Add more images here */}
              </div>
            </div>

            <CheckboxList labels={services} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ServiceMaitreceremonie;
