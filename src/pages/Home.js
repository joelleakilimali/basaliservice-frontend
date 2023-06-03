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
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            className="img_text flex flex-wrap justify-between p-4 m-4"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "center",
              padding: "10px",
              margin: "20px",
              gap: 10,
            }}
          >
            <div
              className="w-[40%] "
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
              }}
            >
              <img src="./assets/logo.jpg" alt="MyImage" className="w-[100%]" />
            </div>
            <div
              className="text-white w-[60%]"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p className="leading-9 text-base text-gray-100 text-shadow-sm transform hover:scale-105 ">
                Basala service Protocol Agency est une agence de The term Lorem
                ipsum refers to those texts which are incomprehensible, i.e. no
                one can make any logical sense out of them, and they are created
                with the aim of presenting to the reader only the graphic
                features, in themselves, of a text or a visual presentation an
                ipsum refers to those texts which are incomprehensible, i.e. no
                one can make any logical sense out of them, and they are created
                with the aim of presenting to the reader only the graphic
                features, in themselves, of a text or a visual presentation
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <hr className="w-[50%] m-16"></hr>
          </div>
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
                    Avez vous un evenement?
                  </h1>
                </div>
                <div>
                  <p>
                    Notre service protocolaire vous accompagne ipsum refers to
                    those texts which are incomprehensible, i.e. no one can make
                    any logical sense out of them, and they are created with the
                    aim of presenting to the reader only the graphic features,
                    in themselves, of a text or a visual presentation an aim of
                    presenting to the reader only the graphic features, in
                    themselves, of a text or a visual presentation an aim of
                    presenting to the reader only the graphic features, in
                    themselves, of a text or a visual presentation an aim of
                    presenting to the reader only the graphic features, in
                    themselves, of a text or a visual presentation an
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
              cover={<img alt="example" src="./assets/proto.jpg" />}
              actions={[
                <Link
                  className="py-10 text-lg animate-pulse"
                  to="/protocolat"
                  style={{ textDecoration: "none", color: "blue" }}
                >
                  Cliquez Ici
                </Link>,
              ]}
              className="custom-card"
            >
              <p>
                one can make any logical sense out of them, and they are created
                with the aim of presenting to the reader only the graphic
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
              cover={<img alt="example" src="./assets/wedd.jpg" />}
              actions={[
                <Link
                  className="py-10 text-lg animate-pulse"
                  to="/securite"
                  style={{ textDecoration: "none", color: "blue" }}
                >
                  Cliquez Ici
                </Link>,
              ]}
              className="custom-card"
            >
              <p>
                one can make any logical sense out of them, and they are created
                with the aim of presenting to the reader only the graphic
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
              cover={<img alt="example" src="./assets/decoco.jpg" />}
              actions={[
                <Link
                  className=" py-10 text-lg animate-pulse"
                  to="/decoration"
                  style={{ textDecoration: "none", color: "blue" }}
                >
                  Cliquez Ici
                </Link>,
              ]}
              className="custom-card"
            >
              <p>
                one can make any logical sense out of them, and they are created
                with the aim of presenting to the reader only the graphic
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
