import React,{useState, useEffect} from "react";
import style from "./Card.module.css";
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
    <>
    <main className={style.main}>
      <form className={style.card}>
        <img id={style.image} src={data.url} className={style.cardImg} />
        <div className={style.cardCampos}>
          <h1>{data.titulo} </h1>

          <div className={style.Autora}>
            <h2>Autor(a):</h2>
            <label className={style.label} for="autora">
              {data.autor}
            </label>
          </div>

          <div className={style.Preco}>
            <h2>Preço:</h2>
            <label className={style.label} for="preco">
              {data.valor}
            </label>
          </div>

          <div className={style.Descricao}>
            <h2> Descrição:</h2>
            <label className={style.label} for="descricao">
              {data.descricao}
            </label>
          </div>

          <div className={style.button}>
            <Button
              text="Editar"
              onClick={() =>
                navigation(`/editar/${data.id}`, { replace: true })
              }
            />
            <Button 
            text="Voltar" 
            onClick={() =>
              navigation(`/`, { replace: true })
            }
            />
          </div>
        </div>
      </form>
    </main>
    </>
  );
}
