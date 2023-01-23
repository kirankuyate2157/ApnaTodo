import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Newdata from "./Components/Newdata";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/new" element={<Newdata />} />
    </Routes>
  );
}

export default App;
