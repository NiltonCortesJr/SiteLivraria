import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { /*FormsEditar, FormsInserir,*/ Home } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/home" element={<Home />} /> 
         <Route path="/add" element={<FormsInserir />} />
         <Route path="/editar/:id" element={<FormsEditar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
