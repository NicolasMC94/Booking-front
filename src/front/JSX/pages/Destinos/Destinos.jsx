import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Destinos.css";

const Destinos = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    getDestinations();
  }, []);

  const getDestinations = async () => {
    const url = "https://741b-90-161-195-130.eu.ngrok.io/api/v1/destinations";
    const options = {
      method: "GET",
      headers: new Headers({ "Content-type": "application/json" }),
      mode: "no-cors",
    };
    const resp = await fetch(url, options);
    const data = await resp.json();
    setDestinations(data);
    console.log(data);
  };
  

  return (
    <div>
      <Navbar />
      <div className="body align-items-center text-center justify-content-center">
        <div className="card card-container m-5 ">
          {destinations.map(
            dest => {
              return<h1>{dest}</h1>
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Destinos;
