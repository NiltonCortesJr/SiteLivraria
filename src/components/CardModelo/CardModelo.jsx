import React from 'react';
import  './CardModelo.css';
import Button from '../Button/Button';


export default function CardModelo() {
  return (
    <div className="card">
        <div className="card-header">
            <img src= "https://m.media-amazon.com/images/P/B01NASOQGG.01._SCLZZZZZZZ_SX500_.jpg" className='card-img' />
        </div>
        <div className="card-body">
            <p className="card-titulo">Em busca do emprego</p>
            <p className="card-autora">Resilia Educação</p>
            <p className="card-valor">R$ 10,00</p>
            <div className="card-footer">
                {/* <a href="a">Saiba Mais</a> */}
                <Button text="Saiba mais"/>
            </div>
        </div>
    </div>
  )
}