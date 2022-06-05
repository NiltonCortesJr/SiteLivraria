import React from 'react';
import  './CardModelo.css';
import Button from '../Button/Button';


export default function CardModelo(props) {
  return (
    <div className="card">
        <div className="card-header">
            <img src= {props.url} className='card-img' />
        </div>
        <div className="card-body">
            <p className="card-titulo">{props.titulo}</p>
            <p className="card-autora">{props.autora}</p>
            <p className="card-valor">R$ {props.valor}0</p>
            <div className="card-footer">
                {/* <a href="a">Saiba Mais</a> */}
                <Button text= "Saiba mais"/>
            </div>
        </div>
    </div>
  )
}