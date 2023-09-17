import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { faComment, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./home.css";
import { Button, Image, Card, Space } from "antd";
import CardService from "../components/Card";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Home() {
  const [isCardVisible, setIsCardVisible] = useState(false);

  useEffect(() => {
    setIsCardVisible(true);
  }, []);

  const cardStyle = {
    position: "relative",
    width: "80%",
    zIndex: 9999,
    opacity: isCardVisible ? 1 : 0,
    transition: "opacity 5s",
  };

  const imageStyle = {
    width: "100%",
    display: "block",
    margin: "auto",
  };
  const sendEmail = () => {
    // Simulate sending an email (replace with actual email sending logic)
    window.open(
      "mailto:basaliservice@gmail.com?subject=Feedback&body=My message"
    );
  };
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div
        className="contenaireHome text-yellow font-bold bg-gradient-to-r from-black to-gray-900 min-h-screen  "
        style={{ fontFamily: "text-font-open-sans", fontSize: "100px" }}
      >
        <div
          className="flex  "
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",

            gap: "5rem",
            // backgroundColor: "red",
          }}
        >
          <div
            className=" "
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              alignItems: "center",
              width: "50%",
            }}
          >
            <div
              style={{
                fontFamily: "text-font-open-sans",
                fontSize: "40px",
              }}
            >
              <h1 className=" text-white prose ">Basali Service </h1>
              <h1 className=" text-yellow-500  ">Protocol's Agency </h1>
            </div>
            <div className="  text-font-open-sans text-gray-200 text-2xl flex ">
              <p style={{ width: "100%" }}>
                Puisque l'objectif de toute personne lors de l'organisation
                d'une activité est la réussite. C'est dans cette optique que
                nous sommes mobilisés, par la création de cette agence pour vous
                épauler dans toutes vos démarches pour la réussite de votre
                activité.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "40%",
            }}
          >
            <div style={cardStyle}>
              <Card>
                <img src="./assets/logo.jpg" alt="MyImage" style={imageStyle} />
              </Card>
            </div>
          </div>
        </div>
        <hr className="w-[50%] my-8"></hr>
        {
          // <div className="w-full my-10">
          //   <div
          //     className="flex sm:flex-row justify-between items-center w-full mx-5"
          //     style={{
          //       display: "flex",
          //       flexWrap: "wrap",
          //       flexDirection: "row",
          //       justifyContent: "center",
          //       alignItems: "center",
          //       gap: "2rem",
          //       backgroundColor: "red",
          //     }}
          //   >
          //     <div
          //       className="flex flex-col justify-center items-center text-gray-200"
          //       style={{
          //         alignItems: "center",
          //         justifyContent: "center",
          //         width: "45%",
          //         backgroundColor: "green",
          //       }}
          //     >
          //       <div className="text-4xl font-bold text-yellow-600 leading-[5rem]">
          //         <h1>Avez-vous un événement?</h1>
          //       </div>
          //       <div>
          //         <p className="text-2xl my-10">
          //           Nous sommes toujours à vos côtés pour vous accompagner dans la
          //           réussite de vos manifestations. N'hésitez pas à nous contacter
          //           en cas de besoin.
          //         </p>
          //       </div>
          //     </div>
          //     <div
          //       className="w-full"
          //       style={{
          //         borderWidth: "5px",
          //         width: "50%",
          //         borderRadius: "10px",
          //         backgroundColor: "yellow",
          //         padding: "40px",
          //       }}
          //     >
          //       <div>
          //         <div className="text-4xl font-bold text-yellow-600 leading-[2rem]">
          //           <h1>Contactez-nous !</h1>
          //         </div>
          //         <form
          //           action="#"
          //           method="POST"
          //           className="flex flex-col items-center justify-center"
          //           style={{
          //             alignItems: "center",
          //             justifyContent: "center",
          //             flexWrap: "wrap",
          //             fontSize: "2rem",
          //             color: "white",
          //             gap: "3rem",
          //           }}
          //         >
          //           <div
          //             className="w-full"
          //             style={{ fontSize: "18px", color: "black" }}
          //           >
          //             <label
          //               htmlFor="email"
          //               className="block font-bold mb-2 text-white"
          //             >
          //               Adresse Email:
          //             </label>
          //             <div className="relative">
          //               <span className="absolute left-3">
          //                 <i className="fas fa-envelope"></i>
          //               </span>
          //               <input
          //                 type="email"
          //                 id="email"
          //                 name="email"
          //                 placeholder="example@example.com"
          //                 className="pl-2 py-5 border border-gray-400 rounded-lg w-full focus:outline-none focus:border-blue-500"
          //               />
          //             </div>
          //           </div>
          //           <div
          //             className="mb-6 w-full"
          //             style={{ fontSize: "18px", color: "black" }}
          //           >
          //             <label
          //               htmlFor="comment"
          //               className="block font-bold mb-2 text-white"
          //             >
          //               Commentaire:
          //             </label>
          //             <div className="relative">
          //               <span className="absolute left-3">
          //                 <i className="fas fa-comment"></i>
          //               </span>
          //               <div className="relative flex">
          //                 <textarea
          //                   id="comment"
          //                   name="comment"
          //                   placeholder="Dites-nous ce que vous voulez .."
          //                   className="pl-2 py-5 pr-4 border border-gray-400 rounded-lg w-full h-32 resize-none focus:outline-none focus:border-blue-500"
          //                 ></textarea>
          //               </div>
          //             </div>
          //           </div>
          //         </form>
          //       </div>
          //     </div>
          //   </div>
          // </div>
        }
        <div className="w-full my-10">
          <div className="flex flex-col sm:flex-row justify-between items-center w-full mx-5  p-6 rounded-lg shadow-lg">
            <div className="flex flex-col justify-center items-center text-gray-200 w-full sm:w-2/5  p-6 rounded-lg shadow-lg">
              <h1 className="text-4xl font-bold text-yellow-600 mb-4">
                Avez-vous un événement ?
              </h1>
              <p className="text-xl text-white">
                Nous sommes toujours à vos côtés pour vous accompagner dans la
                réussite de vos manifestations. N'hésitez pas à nous contacter
                en cas de besoin.
              </p>
            </div>

            <div
              className="w-full sm:w-3/5 border-2 p-6 rounded-lg shadow-lg"
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h1 className="text-4xl font-bold text-yellow-600 ">
                Contactez-nous !
              </h1>

              <form
                action="#"
                method="POST"
                className="flex flex-col items-center justify-center"
                style={{
                  width: "80%",
                  alignItems: "center",
                  // background: "red",
                }}
              >
                <label
                  htmlFor="email"
                  className="block font-bold  text-white "
                  style={{ fontSize: "20px" }}
                >
                  Adresse Email:
                </label>
                <div className="relative w-full ">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@example.com"
                    className="pl-10 py-2 text-lg border border-gray-400 rounded-lg w-full focus:outline-none focus:border-blue-500"
                  />
                </div>

                <label
                  htmlFor="comment"
                  className="block font-bold mb-2 text-white"
                  style={{ fontSize: "20px" }}
                >
                  Commentaire:
                </label>
                <div className="relative w-full mb-6">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <i className="fas fa-comment"></i>
                  </span>
                  <textarea
                    id="comment"
                    name="comment"
                    placeholder="Dites-nous ce que vous voulez .."
                    className="pl-10 py-2 pr-4 text-lg border border-gray-400 rounded-lg w-full h-32 resize-none focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg shadow-lg transition duration-300 transform hover:scale-105"
                >
                  <i className="fas fa-paper-plane mr-2"></i>Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className=" text-black p-5 text-3xl bg-white rounded">
          Nos Services{" "}
        </div>

        <div className="differentService">
          <div className="singleProtocol py-5" style={{ margin: "40px" }}>
            <Card
              width="1500px"
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
              className="custom-card text-xl "
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
              className="custom-card text-xl"
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
              className="custom-card text-xl"
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
              className="custom-card text-xl"
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
                  to="/fille'honneur"
                  style={{
                    textDecoration: "none",
                    color: "#fadb14",
                    fontSize: 28,
                  }}
                >
                  Lire Plus
                </Link>,
              ]}
              className="custom-card text-xl"
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
