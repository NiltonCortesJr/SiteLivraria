import React from "react";
import CardModelo from "../CardModelo/CardModelo";
import style from "./Cards.module.css";
import { useFetch } from "../../hooks/useFetch";
import LoadAnimation from "../LoadAnimation/LoadAnimation";
import { useContext } from "react";
import { PesquisaContext } from "../../context/PesquisaContext";

export default function Cards() {
  const {
    loading,
    data: livros,
    error,
  } = useFetch("https://apilivraria.herokuapp.com/livros");
  if (loading){
    return (
      <>
        <LoadAnimation />
      </>
    );
  }
  const {value} = useContext (PesquisaContext)
  const livroFilter = livros.filter (text => {
    return (text.titulo.toLowerCase().includes(value.toLowerCase()) || text.autor.toLowerCase().includes(value.toLowerCase()))
  })
  console.log (value)
  console.log (livroFilter)
  return (
    <div className={style.container}>
      {livroFilter.map((livro) => (
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
