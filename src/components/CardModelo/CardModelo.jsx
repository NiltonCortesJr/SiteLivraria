import React from "react";
import "./CardModelo.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

export default function CardModelo(props) {
  const navigation = useNavigate();
  console.log(navigation);
  return (
    <div className="card">
      <div className="card-header">
        <img src={props.url} className="card-img" />
      </div>
      <div className="card-body">
        <p className="card-titulo">{props.titulo}</p>
        <p className="card-autora">{props.autora}</p>
        <p className="card-valor">R$ {props.valor}0</p>
        <div className="card-footer">
          <Button
            onClick={() =>
              navigation(
                `/editar/${props.id}`,
                { replace: true },
                console.log("alou")
              )
            }
            text="Saiba mais"
          />
        </div>
      </div>
    </div>
  );
}
