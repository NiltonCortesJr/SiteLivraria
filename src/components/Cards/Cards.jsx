import React from "react";
import CardModelo from "../CardModelo/CardModelo";
import style from "./Cards.module.css";
import { useFetch } from "../../hooks/useFetch";

export default function Cards() {
  const { loading, data: livros, error } = useFetch("https://apilivraria.herokuapp.com/livros");
  if (loading) return <div>Carregando...</div>;


  return (
    <div className={style.container}>
      {livros.map((livro) => (
        <CardModelo
        key={livro.id}
        url={livro.url}
        titulo={livro.titulo}
        autora={livro.autor}
        valor={livro.valor}
        id={livro.id}
        descricao={livro.descricao}
        
        />
        ))}
    </div>
  );
}
