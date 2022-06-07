import React, { useState, useEffect } from "react";
import styles from "./FormEditar.module.css";
import Button from "../Button/Button";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export default function FormEditar(props) {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://apilivraria.herokuapp.com/livros/${id}`
  );

  const [url, setUrl] = useState("");
  const [titulo, setTitulo] = useState("");
  const [autora, setAutora] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { url, titulo, setUrl, autora, valor, descricao };
    const livro = {id}
    
    setIsPending(true);

    /*  fetch("https://apilivraria.herokuapp.com/livros/editar/" + id, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      console.log("Livro editado com sucesso!");
      setIsPending(false);
    }); */
  };

   const handleClick = () => {
    fetch("https://apilivraria.herokuapp.com/livros/" + id, {
      method: "DELETE",
      body: JSON.stringify(livro)
    }).then(() => {
      
    })
  } 

  return (
    <main className={styles.main}>
      <form className={styles.card}>
        <img id={styles.image} src="" />
        <div className={styles.cardCampos}>
          <h2>Edite o livro:</h2>
          <div className={styles.alteraImagem}>
            <label className={styles.label} for="imagem">
              Url da Imagem:{" "}
            </label>
            <input
              className={styles.inputs}
              type="text"
              name="name"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div className={styles.alteraTitulo}>
            <label className={styles.label} for="titulo">
              Título:{" "}
            </label>
            <input
              className={styles.inputs}
              type="text"
              name="name"
              required
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
          <div className={styles.alteraAutora}>
            <label className={styles.label} for="autora">
              Autor(a):{" "}
            </label>
            <input
              className={styles.inputs}
              type="text"
              name="name"
              required
              value={autora}
              onChange={(e) => setAutora(e.target.value)}
            />
          </div>
          <div className={styles.alteraPreco}>
            <label className={styles.label} for="preco">
              Preço:{" "}
            </label>
            <input
              className={styles.inputs}
              type="text"
              name="name"
              required
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          </div>
          <div className={styles.alteraDescricao}>
            <label className={styles.label} for="descricao">
              Descrição:{" "}
            </label>
            <textarea
              id="descricao"
              name="descricao"
              rows="2"
              cols="33"
              required
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            ></textarea>
          </div>
          <div className={styles.button}>
            {!loading && <Button text="Salvar" />}
            {loading && <Button disabled text="Salvando..." />}
            <Button text="Cancelar" />
            <Button text="Deletar" color="#740719ab"/>
          </div>
        </div>
      </form>
    </main>
  );
}
