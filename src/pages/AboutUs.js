import React from "react";
import "./AboutUsPage.css"; // Import the CSS file for styling
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Image } from "antd";

const AboutUsPage = () => (
  <div className="">
    <div>
      <Navbar />
    </div>
    <div className="bg-gradient-to-r from-black to-gray-900 min-h-screen text-white">
      <h1 className="heading p-10 text-yellow-400  ">A propos de Nous</h1>
      <div className="content">
        <div className="flex flex-col  ">
          <h2 className="section-heading text-yellow-400">Qui sommes-nous ?</h2>
          <p className=" text-xl mx-48">
            We are a team of dedicated professionals passionate about delivering
            high-quality services to our clients. With years of experience and
            expertise, we strive to exceed expectations and provide exceptional
            solutions for your needs.
          </p>
        </div>
        <div className="flex flex-col  ">
          <h2 className="section-heading text-yellow-400">Notre Mission </h2>
          <p className="  text-xl mx-48">
            Our mission is to provide innovative and reliable solutions that
            empower businesses to succeed. We aim to build strong and
            long-lasting relationships with our clients by delivering
            exceptional value and consistently exceeding their expectations.
          </p>
        </div>

        <h2 className="section-heading text-yellow-400">Nos valeurs</h2>
        <ul className="text-xl">
          <li>
            Excellence: We are committed to delivering excellence in everything
            we do.
          </li>
          <li>
            Integrity: We operate with the highest level of integrity and
            ethical standards.
          </li>
          <li>
            Collaboration: We believe in the power of collaboration and
            teamwork.
          </li>
          <li>
            Innovation: We foster a culture of innovation and embrace new ideas.
          </li>
          <li>
            Customer Focus: We prioritize our customers' needs and strive to
            provide the best solutions.
          </li>
        </ul>
        <div className="my-20" style={{ marginBottom: "40px" }}>
          <h2
            className=" text-bold text-yellow-400 text-3xl my-5 py-8"
            style={{ marginBottom: "10px" }}
          >
            Nos contacts
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gridGap: "20px",
            }}
          >
            <Image
              className="m-10  p-5"
              src="./assets/BSprotocol13.jpg"
              alt="Nos contacts"
              style={{
                width: "100%",
                height: "35%",
                objectFit: "contain",
                //marginLeft: "630px",
                //marginBottom: "30px",
              }}
            />
            {/* Add more images here */}
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default AboutUsPage;
