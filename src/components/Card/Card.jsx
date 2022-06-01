import React from 'react';
import  './Card.css';


export default function Card() {
  return (
    <section className='container'>
        <div className="card">
            <div className="card-header">
                <img src="https://m.media-amazon.com/images/P/B01NASOQGG.01._SCLZZZZZZZ_SX500_.jpg" className='card-img' />
            </div>
            
            <div className="card-body">
                <p className="card-titulo">titulo</p>
                <p className="card-autora">autora</p>
                <p className="card-preco">"R$ " 100.00</p>
            </div>

            <div className="card-footer">
                <a href="a">Saiba Mais</a>
            </div>
        </div>
    </section>
  )
}

