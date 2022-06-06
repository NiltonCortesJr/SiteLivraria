import React from "react";
import "./FormEditar.css";
import Button from "../Button/Button";
import { useParams } from "react-router-dom";

export default function FormEditar() {
  const { id } = useParams();

  return (
    <main className="main">
      <form className="card">
        <img
          id="image"
          src="https://m.media-amazon.com/images/P/B01NASOQGG.01._SCLZZZZZZZ_SX500_.jpg"
          className="card-img"
        />
        <div className="card-campos">
          <h2>Edite o livro:</h2>
          <div className="alteraImagem">
            <label className="label" for="imagem">
              Url da Imagem:{" "}
            </label>
            <input className="inputs" type="text" name="name" />{" "}
            {/* AQUI VIRÁ A PROPS.URL */}
          </div>
          <div className="alteraTitulo">
            <label className="label" for="titulo">
              Título:{" "}
            </label>
            <input className="inputs" type="text" name="name" />{" "}
            {/* AQUI VIRÁ A PROPS.NOME */}
          </div>
          <div className="alteraAutora">
            <label className="label" for="autora">
              Autor(a):{" "}
            </label>
            <input className="inputs" type="text" name="name" />{" "}
            {/* AQUI VIRÁ A PROPS.URL */}
          </div>
          <div className="alteraPreco">
            <label className="label" for="preco">
              Preço:{" "}
            </label>
            <input className="inputs" type="text" name="name" />{" "}
            {/* AQUI VIRÁ A PROPS.URL */}
          </div>
          <div className="alteraDescricao">
            <label className="label" for="descricao">
              Descrição:{" "}
            </label>
            <textarea
              id="descricao"
              name="descricao"
              rows="2"
              cols="33"
            ></textarea>
          </div>
          <div className="button">
            <Button text="Salvar" />
            <Button text="Cancelar" />
            <Button text="Deletar" color="#740719ab" />
          </div>
        </div>
      </form>
    </main>
  );
}
