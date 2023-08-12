import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./home.css";
import { Button, Image, Card, Space } from "antd";
import CardService from "../components/Card";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="contenaireHome text-yellow font-bold bg-gradient-to-r from-black to-gray-900 min-h-screen  ">
        <div
          className="img_text flex flex-wrap justify-between p-4 m-4"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            padding: "20px",
            margin: "20px",
          }}
        >
          <div className="w-full sm:w-1/2 md:w-2/5 lg:w-2/5 xl:w-2/5">
            <img src="./assets/logo.jpg" alt="MyImage" className="w-full" />
          </div>
          <div className="w-full sm:w-1/2 md:w-3/5 lg:w-3/5 xl:w-3/5 text text-gray-200 text-xl flex justify-center">
            <p className="text-center ">
              Puisque l'objectif de toute personne lors de l'organisation d'une
              activité est la réussite. C'est dans cette optique que nous sommes
              mobilisés, par la création de cette agence pour vous épauler dans
              toutes vos démarches pour la réussite de votre activité.
            </p>
          </div>
        </div>

        <hr className="w-[50%] m-28"></hr>
        <div className="w-full my-10 px-5">
          <div
            className="flex flex-col sm:flex-row justify-between items-center w-full mx-5"
            style={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <div
              className="flex flex-col justify-center items-center w-full sm:w-2/5 text-gray-200 text-xl"
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <div className="">
                <h1 className="font-bold text-2xl text-yellow-600">
                  Avez-vous un evenement?
                </h1>
              </div>
              <div>
                <p>
                  Nous sommes toujours proche de vous pour vous accompagner à la
                  réussite de vos manisfestations, alors n'hésitez pas de nous
                  contacter en cas de besoin.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-3/5">
              <div>
                <div>
                  <h1 className="font-bold text-2xl text-yellow-600">
                    Contactez-nous !
                  </h1>
                </div>
                <form
                  action="#"
                  method="POST"
                  className="flex flex-col items-center justify-center"
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <div className="mb-6 w-full sm:w-1/2">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Adresse Email:
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2 text-gray-500">
                        <i className="fas fa-envelope"></i>
                      </span>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@example.com"
                        className="py-2 pl-10 pr-4 border border-gray-400 rounded-lg w-full focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="mb-6 w-full sm:w-1/2">
                    <label
                      htmlFor="comment"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Commentaire:
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2 text-gray-500">
                        <i className="fas fa-comment"></i>
                      </span>
                      <textarea
                        id="comment"
                        name="comment"
                        placeholder="Dites-nous ce que vous voulez .."
                        className="py-2 pl-10 pr-4 border border-gray-400 rounded-lg w-full h-32 resize-none focus:outline-none focus:border-blue-500"
                      ></textarea>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className=" text-black p-5 text-3xl bg-white rounded">
          Nos Services{" "}
        </div>
        <div className="differentService">
          <div className="singleProtocol py-5" style={{ margin: "40px" }}>
            <Card
              width="100%"
              size="900px"
              title="Service de Protocol"
              hoverable
              style={{ width: "100%" }}
              cover={<img alt="example" src="./assets/BSprotocol15.jpg" />}
              actions={[
                <Link
                  className="py-10 text-lg"
                  to="/protocolat"
                  style={{
                    textDecoration: "none",
                    color: "#fadb14",
                    fontSize: 28,
                  }}
                >
                  Lire Plus
                </Link>,
              ]}
              className="custom-card"
            >
              <p>
                Personne ne rend à sa génération un service plus grand que celui
                qui, soit par son art, soit par son existence, lui apporte le
                don d'une certitude.
              </p>
            </Card>
          </div>
          <div className="singleProtocol" style={{ margin: "40px" }}>
            <Card
              width="100%"
              size="900px"
              title="Service de Securité"
              hoverable
              style={{ width: "100%" }}
              cover={<img alt="example" src="./assets/BSsecurite2.jpg" />}
              actions={[
                <Link
                  className="py-10 text-lg"
                  to="/securite"
                  style={{
                    textDecoration: "none",
                    color: "#fadb14",
                    fontSize: 28,
                  }}
                >
                  Lire Plus
                </Link>,
              ]}
              className="custom-card"
            >
              <p>
                Personne ne rend à sa génération un service plus grand que celui
                qui, soit par son art, soit par son existence, lui apporte le
                don d'une certitude.
              </p>
            </Card>
          </div>

          <div className="singleProtocol" style={{ margin: "40px" }}>
            <Card
              width="100%"
              size="900px"
              title="Service de Decoration"
              hoverable
              style={{ width: "100%" }}
              cover={<img alt="example" src="./assets/deco.jpg" />}
              actions={[
                <Link
                  className="py-10 text-lg"
                  to="/decoration"
                  style={{
                    textDecoration: "none",
                    color: "#fadb14",
                    fontSize: 28,
                  }}
                >
                  Lire Plus
                </Link>,
              ]}
              className="custom-card"
            >
              <p>
                Personne ne rend à sa génération un service plus grand que celui
                qui, soit par son art, soit par son existence, lui apporte le
                don d'une certitude.
              </p>
            </Card>
          </div>

          <div className="singleProtocol" style={{ margin: "40px" }}>
            <Card
              width="100%"
              size="900px"
              title="Maître de cérémonie"
              hoverable
              style={{ width: "100%" }}
              cover={<img alt="example" src="./assets/c1.jpg" />}
              actions={[
                <Link
                  className="py-10 text-lg"
                  to="/maitredeceremonie"
                  style={{
                    textDecoration: "none",
                    color: "#fadb14",
                    fontSize: 28,
                  }}
                >
                  Lire Plus
                </Link>,
              ]}
              className="custom-card"
            >
              <p>
                Personne ne rend à sa génération un service plus grand que celui
                qui, soit par son art, soit par son existence, lui apporte le
                don d'une certitude.
              </p>
            </Card>
          </div>

          <div className="singleProtocol" style={{ margin: "40px" }}>
            <Card
              width="100%"
              size="900px"
              title="Fille d'honneur"
              hoverable
              style={{ width: "100%" }}
              cover={<img alt="example" src="./assets/fille_d_honneur.jpg" />}
              actions={[
                <Link
                  className="py-10 text-lg"
                  to="/filled'honneur"
                  style={{
                    textDecoration: "none",
                    color: "#fadb14",
                    fontSize: 28,
                  }}
                >
                  Lire Plus
                </Link>,
              ]}
              className="custom-card"
            >
              <p>
                Personne ne rend à sa génération un service plus grand que celui
                qui, soit par son art, soit par son existence, lui apporte le
                don d'une certitude.
              </p>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
