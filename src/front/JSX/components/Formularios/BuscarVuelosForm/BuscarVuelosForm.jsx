import React from "react";

const BuscarVuelosForm = () => {
  return (
    <div className="container">
      <div className="container-fluid">
        <div className="row title">
          <h1 className="text-center m-0">Busca tu vuelo </h1>
        </div>
        <form className="d-flex flex-column gap-3">
          <div className="d-flex justify-content-between m-2">
            <input
              placeholder="Nombre"
              className="form-control m-2"
              type="text"
            />
            <input
              placeholder="Apellidos"
              className="form-control m-2"
              type="text"
            />
            <input
              placeholder="edad"
              className="form-control m-2"
              type="number"
            />
          </div>
          <div className="d-flex justify-content-between m-2">
            <input
              placeholder="Origen"
              className="form-control m-2"
              type="text"
            />
            <h5>Fecha inicial</h5>
            <input
              placeholder="Fecha inicial"
              className="form-control m-2" 
              type="date"
            />
            <h5>Fecha final</h5>
            <input
              placeholder="Fecha final"
              className="form-control m-2"
              type="date"
            />
          </div>

          <button className="btn col-3 mb-5 btn-primary" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  );
};

export default BuscarVuelosForm;
