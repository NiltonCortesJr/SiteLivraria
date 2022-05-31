import React from 'react';
import  './Card.css';


export default function Card() {
  return (
    <section className='container'>
        <div className="card card-1">
            <div className="card-header">
                <img src="https://m.media-amazon.com/images/P/B01NASOQGG.01._SCLZZZZZZZ_SX500_.jpg" className='card-img' />
            </div>
            <div className="class-body">
                <h2 className="card-local">"Mindset: A nova psicologia do sucesso"</h2>
                <p className="card-titulo">Carol S. Dweck</p>
                <h3 className="card-texto">R$37,60</h3>
                <div className="card-footer">
                    <a href="a">Saiba Mais</a>
                </div>
            </div>
        </div>
    </section>

    
  )
}

