import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormsEditar, FormsInserir, Home, SaibaMais } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<FormsInserir />} />
        <Route path="/editar/:id" element={<FormsEditar />} />
        <Route path="/saibamais/:id" element={<SaibaMais />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
