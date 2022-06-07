import React from "react";
import "./CardModelo.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

export default function CardModelo(props) {
  const navigation = useNavigate();
  return (
    <div className="card">
      <div className="card-header">
        <img src={props.url} className="card-img" />
      </div>
      <div className="card-body">
        <p className="card-titulo">{props.titulo}</p>
        <p className="card-autora">{props.autora}</p>
        <p className="card-valor">R$ {props.valor.toFixed(2).replace(".",",")}</p>
        <div className="card-footer">
          <Button
            onClick={() =>
              navigation(
                `/editar/${props.id}`,
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
