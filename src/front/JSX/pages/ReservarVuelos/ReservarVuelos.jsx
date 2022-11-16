import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./ReservarVuelos.css"


const ReservarVuelos = () => {
  return (
    <div>
        <Navbar />
        <div className='body align-items-center text-center justify-content-center'>
            <div className='card card-container m-5 '>
                <h1>BIENVENIDO A NUESTRA VENTANA DE RESERVAS DE VUELOS</h1>
            </div>
        </div>
  </div>
  )
}

export default ReservarVuelos