import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Project from "./pages/Project";
import Rooms from "./pages/Rooms";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Main />} /> 
        <Route path="/project" element={<Project />} /> 
        <Route path="/rooms" element={<Rooms />} /> 
      </Routes>
    </>
  );
}

export default App;
