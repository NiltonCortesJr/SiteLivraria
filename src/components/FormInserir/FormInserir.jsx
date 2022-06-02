import React from 'react';
import  './FormInserir.css';
import Button from '../Button/Button';


export default function FormInserir() {
  return (
    <div className="card">
      <h1>Inserir um Livro Novo</h1>
            <div className="card-header">
              <div className='alteraImagem'>
                <label for="imagem">Altere imagem do livro: </label>
                <textarea id="imagem" name="imagem" rows="1" cols="33">
                  AQUI A PROPS.URL SUBIRÁ PRA API
                </textarea>
                <Button />
              </div>
              <img src="https://m.media-amazon.com/images/P/B01NASOQGG.01._SCLZZZZZZZ_SX500_.jpg" className='card-img' />
            </div>

            <div className="card-body">
              <div className='alteraTitulo'>
                <label for="titulo">Insira o título do livro: </label>
                <textarea id="titulo" name="titulo" rows="1" cols="33">
                  AQUI VIRÁ PROPS.NOME SUBIRÁ PRA API
                </textarea>
              </div>

              <div className='alteraAutora'>
                <label for="autora">Isira o/a autor(a) do livro: </label>
                <textarea id="autora" name="autora" rows="1" cols="33">
                  AQUI A PROPS.AUTORA SUBIRÁ PRA API
                </textarea>
              </div>

              <div className='alteraValor'>
                <label for="preco">Isira o Valor do livro: </label>
                <textarea id="preco" name="preco" rows="1" cols="33">
                  AQUI A PROPS.VALOR SUBIRÁ PRA API
                </textarea>
              </div>

              <div className='alteraDescricao'>
                <label for="descricao">Isira a descrição do livro: </label>
                <textarea id="descricao" name="descricao" rows="1" cols="33">
                  AQUI A PROPS.DESCRICAO SUBIRÁ PRA API
                </textarea>
              </div>

          </div>
              <div className='button'>
                <Button />
                <Button />
                <Button />
              </div>
    </div>
  )
}
