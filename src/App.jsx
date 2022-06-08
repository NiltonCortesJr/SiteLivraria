import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormsEditar, FormsInserir, Home, SaibaMais, PagesContatos } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route exact path="/" element={<Home />} /> 
         <Route exact path="/add" element={<FormsInserir />} />
         <Route path="/editar/:id" element={<FormsEditar />} />
         <Route path="/saibamais/:id" element={<SaibaMais />} />
         <Route path="/contato" element={<PagesContatos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
