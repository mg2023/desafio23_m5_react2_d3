import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import Detalle from "./views/Detalle"

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>      
            <Route path="/" element={<Home />} />
            <Route path="/pokemones" element={<Pokemones />} />
            <Route path="/pokemones/:nombre" element={<Detalle />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;



// minuto 59:52
