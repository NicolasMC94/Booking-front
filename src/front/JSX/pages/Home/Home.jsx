import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css"

const Home = () => {
  return (
    <div>
    <Navbar />
    
    <div className='body align-items-center text-center justify-content-center'>
            <div className='card card-container m-5 '>
                <h1>BIENVENIDOS A NUESTRA APP DE RESERVAS DE VUELOS</h1>
            </div>
        </div>
  </div>
  );
};

export default Home;  
  