import React from "react";
import style from "./CardModelo.module.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

export default function CardModelo(props) {
  const navigation = useNavigate();
  return (
    <div className={style.card}>
      <div className={style.cardHeader}>
        <img src={props.url} className={style.cardImg} />
      </div>
      <div className={style.cardBody}>
        <p className={style.cardTitulo}>{props.titulo}</p>
        <p className={style.cardAutora}>{props.autora}</p>
        <p className={style.cardValor}>R$ {props.valor.toFixed(2).replace(".",",")}</p>
        <div className={style.cardFooter}>
          <Button
            onClick={() =>
              navigation(
                `/saibamais/${props.id}`,
                { replace: true }  
              ) 
            }
            text="Saiba mais"
          />
        </div>
      </div>
    </div>
  );
}
