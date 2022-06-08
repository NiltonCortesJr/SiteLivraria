import React, { useState } from "react";
import styles from "./FormInserir.module.css";
import Button from "../Button/Button";

export default function FormInserir() {
  const [id, setId] = useState();
  const [nome, setNome] = useState("");
  const [autora, setAutora] = useState("");
  const [gênero, setGênero] = useState("");
  const [valor, setValor] = useState();
  const [descricao, setDescricao] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const livro = { id ,nome, autora, gênero, valor, descricao, url };

    setLoading(true);

    fetch("https://apilivraria.herokuapp.com/livros/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(livro),
    }).then(() => {
      console.log("Livro inserido com sucesso!");
      setLoading(false);
    });
  };

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit} className={styles.card}>
        {/* <img id={styles.image} src="" /> */}
        <div className={styles.cardCampos}>
          <h2>Insira um livro</h2>
          <div className={styles.alteraTitulo}>
            <label className={styles.label} for="id">
              Código de Barras:{" "}
            </label>
            <input
              className={styles.inputs}
              type="text"
              name="name"
              required
              value={id}
              onChange={(e) => setId(e.target.value)}
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
              value={autora}
              onChange={(e) => setAutora(e.target.value)}
            />
          </div>

          <div className={styles.alteraAutora}>
            <label className={styles.label} for="gênero">
              Gênero:{" "}
            </label>
            <input
              className={styles.inputs}
              type="text"
              name="name"
              required
              value={gênero}
              onChange={(e) => setGênero(e.target.value)}
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
          <div className={styles.button}>
            {!loading && <Button text="Adicionar" />}
            {loading && <Button disabled text="Adicionando..." />}
            <Button text="Cancelar" />
          </div>
        </div>
      </form>
    </main>
  );
}
