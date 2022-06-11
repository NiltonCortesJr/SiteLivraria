import React, { useState, useEffect } from "react";
import styles from "./FormEditar.module.css";
import Button from "../Button/Button";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export default function FormEditar() {
  const { id } = useParams();
  const navigation = useNavigate();
  const { data, loading, error } = useFetch(
    `https://apilivraria.herokuapp.com/livros/${id}`
  );
  useEffect(()=>{
    fetch("https://apilivraria.herokuapp.com/livros/"+id)
    .then((response) => response.json())
    .then((json) =>setDadosI(json));
  },[]);
  
  const [url, setUrl] = useState("");
  const [nome, setNome] = useState("");
  const [autora, setAutora] = useState("");
  const [gênero, setGênero] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dadosI, setDadosI] = useState("");
  
    const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = { url, nome, autora, gênero, valor, descricao };
    
    fetch("https://apilivraria.herokuapp.com/livros/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log("Livro editado com sucesso!");
      })
      .catch((err) => {
        console.log(err);
      });
    navigation("/");
  };

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit} className={styles.card}>
        <img id={styles.image} src={dadosI.url} />
        <div className={styles.cardCampos}>
          <h2>Editar livro</h2>
          <div className={styles.alteraImagem}>
            <label className={styles.label} for="imagem">
              Url da Imagem:{" "}
            </label>
            <input
              className={styles.inputs}
              type="text"
              name="name"
              required
              placeholder={dadosI.url}
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
              placeholder={dadosI.titulo}
              value={nome}
              onChange={(e) => setNome(e.target.value)}
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
              placeholder={dadosI.autor}
              value={autora}
              onChange={(e) => setAutora(e.target.value)}
            />
          </div>
          <div className={styles.alteraPreco}>
            <label className={styles.label} for="genero">
              Gênero:{" "}
            </label>
            <input
              className={styles.inputs}
              type="text"
              name="name"
              required
              placeholder={dadosI.genero}
              value={gênero}
              onChange={(e) => setGênero(e.target.value)}
            />
          </div>
          <div className={styles.alteraDescricao}>
          <div className={styles.alteraPreco}>
            <label className={styles.label} for="preco">
              Preço:{" "}
            </label>
            <input
              className={styles.inputs}
              type="text"
              name="name"
              required
              placeholder={dadosI.valor}
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          </div>
            <label className={styles.label} for="descricao">
              Descrição:{" "}
            </label>
            <textarea
              id="descricao"
              name="descricao"
              rows="2"
              cols="33"
              required
              placeholder={dadosI.descricao}
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            ></textarea>
          </div>
          <div className={styles.button}>
            {!loading && <Button text="Salvar" />}
            {loading && <Button disabled text="Salvando..." />}
            <Link to="/"><Button text="Cancelar" /></Link>
          </div>
        </div>
      </form>
    </main>
  );
}
