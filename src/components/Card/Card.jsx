import React,{useState, useEffect} from "react";
import "./Card.css";
import Button from "../Button/Button";
import { useParams, useNavigate } from "react-router-dom";

export default function Card() {
  const [data, setData] = useState({});
  const { id } = useParams();
  const navigation = useNavigate();
  
  useEffect(()=>{
    fetch("https://apilivraria.herokuapp.com/livros/"+id)
    .then((response) => response.json())
    .then((json) =>setData(json));
  },[]);

  const handleClick = () => {
    fetch("https://apilivraria.herokuapp.com/livros/"+id, {
      method: "DELETE"
    }).then(() => {});
  };
  
  return (
    <main className="main">
      <form className="card">
        <img id="image" src={data.url} className="card-img" />
        <div className="card-campos">
          <h1>{data.titulo} </h1>

          <div className="Autora">
            <h2>Autor(a):</h2>
            <label className="label" for="autora">
              {data.autor}
            </label>
          </div>

          <div className="Preco">
            <h2>Preço:</h2>
            <label className="label" for="preco">
              {data.valor}
            </label>
          </div>

          <div className="Descricao">
            <h2> Descrição:</h2>
            <label className="label" for="descricao">
              {data.descricao}
            </label>
          </div>

          <div className="button">
            <Button
              text="Editar"
              onClick={() =>
                navigation(`/editar/${data.id}`, { replace: true })
              }
            />
            <Button onClick={handleClick}text="Deletar" color="#740719ab" />
            <Button text="Voltar" />
          </div>
        </div>
      </form>
    </main>
  );
}
