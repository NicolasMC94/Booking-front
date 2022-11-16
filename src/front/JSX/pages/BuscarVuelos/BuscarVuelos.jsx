import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./BuscarVuelos.css"


const BuscarVuelos = () => {
  return (
    <div>
        <Navbar />
        <div className='body align-items-center text-center justify-content-center'>
            <div className='card card-container m-5 '>
                <h1>BIENVENIDO A NUESTRA VENTANA DE BÚSQUEDA DE VUELOS</h1>
            </div>
        </div>
  </div>
  )
}

export default BuscarVuelos