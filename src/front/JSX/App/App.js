import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import BuscarVuelos from "../pages/BuscarVuelos/BuscarVuelos.jsx";
import Destinos from "../pages/Destinos/Destinos.jsx";
import Home from "../pages/Home/Home.jsx";
import ReservarVuelos from "../pages/ReservarVuelos/ReservarVuelos.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/flights" element={<BuscarVuelos/>}/>
        <Route path="/bookFlight" element={<ReservarVuelos/>}/>
        <Route path="/destinations" element={<Destinos/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;