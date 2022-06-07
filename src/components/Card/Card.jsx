import React from "react";
import "./Card.css";
import Button from "../Button/Button";
import { useParams, useNavigate } from "react-router-dom";

export default function Card(props) {
  const { id } = useParams();
  const navigation = useNavigate();
 /*  fetch('https://apilivraria.herokuapp.com/livros/' + id, {
    }).then((response) => response.json())
    .then((json) => console.log(json));
 */
console.log(props)
  return (
    <main className="main">
      <form className="card">
        <img id="image" src={props.url} className="card-img" />
        <div className="card-campos">
          <h1>{"t"} </h1>

          <div className="Autora">
            <h2>Autor(a):</h2>
            <label className="label" for="autora">
              {" t"}
            </label>
          </div>

          <div className="Preco">
            <h2>Preço:</h2>
            <label className="label" for="preco">
              {" t"}
            </label>
          </div>

          <div className="Descricao">
            <h2> Descrição:</h2>
            <label className="label" for="descricao">
              {"t "}
            </label>
          </div>

          <div className="button">
            
            <Button text="Editar"  onClick={() =>
              navigation(
                `/editar/${props.id}`,
                { replace: true }  
              )
            }/>
     

            <Button text="Deletar" color="#740719ab"/>
            <Button text="Voltar" />
          </div>
        </div>
      </form>
    </main>
  );
}
