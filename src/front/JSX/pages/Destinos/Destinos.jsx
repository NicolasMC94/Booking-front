import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Destinos.css";

const Destinos = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch("https://741b-90-161-195-130.eu.ngrok.io/api/v1/destinations", {
      method: "GET",
      headers: { "Content-type": "application/json" },
      mode: "no-cors",
    })
      .then((response) => response.json())
      .then((data) => {
        setDestinations(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="body align-items-center text-center justify-content-center">
        <div className="card card-container m-5 ">
        <h1 className="text-center m-0">BIENVENIDO A NUESTRA VENTANA DE DESTINOS </h1>
          {destinations.map((dest) => {
            return <h1>{dest}</h1>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Destinos;
