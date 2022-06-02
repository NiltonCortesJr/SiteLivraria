import React from 'react';
import  './CardModelo.css';


export default function Card(props) {
  return (
    
        <div className="card">
            <div className="card-header">
                <img src= {props.url} className='card-img' />
            </div>
            <div className="card-body">
                <p className="card-titulo">{props.titulo}</p>
                <p className="card-autora">{props.autora}</p>
                <p className="card-valor">R$ {props.valor}</p>
                <button className='card-button' typeof='submit'>Saiba Mais</button>
            </div>
        </div>
   

    
  )
}

