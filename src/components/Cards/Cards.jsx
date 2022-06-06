import React, {useState, useEffect} from 'react'
import CardModelo from '../CardModelo/CardModelo'
import './Cards.css'

export default function Cards() {
  const [livros, setLivros] = useState([]);
  const [selectedLivros, setSelectedLivros] = useState();

  useEffect(() => {
    fetch('https://apilivraria.herokuapp.com/livros')
    .then(res => res.json())
    .then(json => setLivros(json.rows))
  }, []);

  return (
    <div className = 'container'>
         {livros.map(livro=>(
        <CardModelo key={livro.id}
        url={livro.url}
        titulo={livro.titulo}
        autora={livro.autora}
        valor={livro.valor}
        id={livro.id}
        /> 
      ))} 
    </div>
  )
}
