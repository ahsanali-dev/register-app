import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Regiater from "./components/Regiater";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Regiater />} />
      </Routes>
    </>
  );
};

export default App;
