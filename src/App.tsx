import "./App.css";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import Pricing from "./Pages/Pricing";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
