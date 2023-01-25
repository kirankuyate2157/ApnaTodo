import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Newdata from "./Components/Newdata";
import Test from "./Components/Test";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<Newdata />} />
      <Route path="/t" element={<Test />} />
    </Routes>
  );
}

export default App;
