import React, { useState, useEffect } from "react";
import CardModelo from "../CardModelo/CardModelo";
import "./Cards.css";
import { useFetch } from "../../hooks/useFetch";

export default function Cards() {
  const [setLivros] = useState([]);
  const [selectedLivros, setSelectedLivros] = useState();
  const { loading, data: livros, error } = useFetch("");
  if (loading) return <div>Carregando...</div>;

  console.log(livros);

  return (
    <div className="container">
      {livros.map((livro) => (
        <CardModelo
          key={livro.id}
          url={livro.url}
          titulo={livro.titulo}
          autora={livro.autora}
          valor={livro.valor}
          id={livro.id}
        />
      ))}
    </div>
  );
}
