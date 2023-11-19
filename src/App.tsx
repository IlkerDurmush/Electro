import "./App.css";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import Pricing from "./Pages/Pricing";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
      </Routes>
    </>
  );
}

export default App;
