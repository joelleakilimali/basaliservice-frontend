import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./home.css";
import { Button, Image, Card, Space } from "antd";
import CardService from "../components/Card";
function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="contenaireHome text-yellow font-bold bg-gradient-to-r from-black to-gray-900 min-h-screen  ">
        <div className="img_text">
          <Image src="./assets/logo.jpg" alt="My Image" width={300} />
          <div className="text text-gray-200 text-xl">
            <p>
              Basala service Protocol Agency est une agence de The term Lorem
              ipsum refers to those texts which are incomprehensible, i.e. no
              one can make any logical sense out of them, and they are created
              with the aim of presenting to the reader only the graphic
              features, in themselves, of a text or a visual presentation an
              ipsum refers to those texts which are incomprehensible, i.e. no
              one can make any logical sense out of them, and they are created
              with the aim of presenting to the reader only the graphic
              features, in themselves, of a text or a visual presentation an
            </p>
          </div>
        </div>
        <hr className="w-[50%] m-52"></hr>
        <div className=" w-full my-10 px-5">
          <div
            style={{ justifyContent: "space-between", alignItems: "center" }}
            className="flex  w-full  mx-5"
          >
            <div
              className="flex flex-col justify-center align-middle w-[40%] text-gray-200 text-xl"
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <div className="">
                <h1 className="font-bold text-2xl text-yellow-600">
                  Avez vous un evenement?
                </h1>
              </div>
              <div>
                <p style={{}}>
                  Notre service protocolaire vous accompagne ipsum refers to
                  those texts which are incomprehensible, i.e. no one can make
                  any logical sense out of them, and they are created with the
                  aim of presenting to the reader only the graphic features, in
                  themselves, of a text or a visual presentation an aim of
                  presenting to the reader only the graphic features, in
                  themselves, of a text or a visual presentation an aim of
                  presenting to the reader only the graphic features, in
                  themselves, of a text or a visual presentation an aim of
                  presenting to the reader only the graphic features, in
                  themselves, of a text or a visual presentation an
                </p>
              </div>
            </div>
            <div className="w-[60%] ">
              <div>
                <div>
                  <h1 className="font-bold text-2xl text-yellow-600">
                    Contactez-nous !
                  </h1>
                </div>
                <form
                  action="#"
                  method="POST"
                  className=" flex flex-col align-middle justify-center"
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <div class="mb-6 w-[50%]">
                    <label
                      for="email"
                      class="block text-gray-700 font-bold mb-2"
                    >
                      Adresse Email:
                    </label>
                    <div class="relative">
                      <span class="absolute left-3 top-2 text-gray-500">
                        <i class="fas fa-envelope"></i>
                      </span>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@example.com"
                        class="py-2 pl-10 pr-4 border border-gray-400 rounded-lg w-full focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div class="mb-6 w-[50%]">
                    <label
                      for="comment"
                      class="block text-gray-700 font-bold mb-2"
                    >
                      Commentaire:
                    </label>
                    <div class="relative">
                      <span class="absolute left-3 top-2 text-gray-500">
                        <i class="fas fa-comment"></i>
                      </span>
                      <textarea
                        id="comment"
                        name="comment"
                        placeholder="Dites-nous ce que vous voulez .."
                        class="py-2 pl-10 pr-4 border border-gray-400 rounded-lg w-full h-32 resize-none focus:outline-none focus:border-blue-500"
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
          <div className="singleProcol " style={{ margin: "40px" }}>
            <Card
              title="Protocol"
              hoverable
              style={{ width: "100%" }}
              cover={<img alt="example" src="./assets/wedd.jpg" />}
              actions={[<Button key="read-more">Lire Plus</Button>]}
            >
              <p>
                one can make any logical sense out of them, and they are created
                with the aim of presenting to the reader only the graphic
              </p>
            </Card>
          </div>
          <div className="singleProcol " style={{ margin: "40px" }}>
            <Card
              width="100%"
              size="900px"
              title="Service traiteur "
              hoverable
              style={{ width: "100%" }}
              cover={<img alt="example" src="./assets/wedd.jpg" />}
              actions={[<Button key="read-more">Lire Plus</Button>]}
            >
              <p>
                one can make any logical sense out of them, and they are created
                with the aim of presenting to the reader only the graphic
              </p>
            </Card>
          </div>
          <div className="singleProcol " style={{ margin: "40px" }}>
            <Card
              title="Decoration"
              hoverable
              style={{ width: "100%" }}
              cover={<img alt="example" src="./assets/wedd.jpg" />}
              actions={[<Button key="read-more">Lire Plus</Button>]}
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
