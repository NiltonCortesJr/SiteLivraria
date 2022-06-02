import React from "react";
import "./FormEditar.css";
import Button from "../Button/Button";

export default function Form() {
  return (
    <main className="main">
      <form className="card">
        <img
          id="image"
          src="https://m.media-amazon.com/images/P/B01NASOQGG.01._SCLZZZZZZZ_SX500_.jpg"
          className="card-img"
        />

        <div className="card-campos">
          <div className="alteraImagem">
            <label for="imagem">Url da Imagem: </label>
            <input className="inputs" type="text" name="name" />{" "}
            {/* AQUI VIRÁ A PROPS.URL */}
          </div>

          <div className="alteraTitulo">
            <label for="titulo">Título: </label>
            <input className="inputs" type="text" name="name" />{" "}
            {/* AQUI VIRÁ A PROPS.NOME */}
          </div>

          <div className="alteraAutora">
            <label for="autora">Autor(a): </label>
            <input className="inputs" type="text" name="name" />{" "}
            {/* AQUI VIRÁ A PROPS.URL */}
          </div>

          <div className="alteraPreco">
            <label for="preco">Preço: </label>
            <input className="inputs" type="text" name="name" />{" "}
            {/* AQUI VIRÁ A PROPS.URL */}
          </div>

          <div className="alteraDescricao">
            <label for="descricao">Descrição: </label>
            <textarea
              id="descricao"
              name="descricao"
              rows="2"
              cols="33"
            ></textarea>
          </div>

          <div className="button">
            <Button />
            <Button />
          </div>
        </div>
      </form>
    </main>
  );
}
