import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Pokemones from "./views/Pokemones";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>      
            <Route path="/" element={<Home />} />
            <Route path="/pokemones" element={<Pokemones />} />
            <Route path="/pokemones/:nombre" element={<Pokemones />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
