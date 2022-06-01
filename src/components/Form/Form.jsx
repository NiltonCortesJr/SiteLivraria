import React from 'react';
import  './Form.css';
import Button from '../Button/Button';


export default function Form() {
  return (
    <div className="card">
            <div className="card-header">
              <img src="https://m.media-amazon.com/images/P/B01NASOQGG.01._SCLZZZZZZZ_SX500_.jpg" className='card-img' />
              <div className='alteraImagem'>
                <label for="imagem">Altere imagem do livro: </label>
                <textarea id="imagem" name="imagem" rows="1" cols="33">
                  AQUI VIRÁ A PROPS.URL
                </textarea>
                <Button />
              </div>
            </div>

            <div className="card-body">
              <div className='alteraTitulo'>
                <label for="titulo">Altere o título do livro: </label>
                <textarea id="titulo" name="titulo" rows="1" cols="33">
                  AQUI VIRÁ A PROPS.NOME
                </textarea>
              </div>

              <div className='alteraAutora'>
                <label for="autora">Altere o/a autor(a) do livro: </label>
                <textarea id="autora" name="autora" rows="1" cols="33">
                  AQUI VIRÁ A PROPS.AUTORA
                </textarea>
              </div>

              <div className='alteraValor'>
                <label for="preco">Altere o Valor do livro: </label>
                <textarea id="preco" name="preco" rows="1" cols="33">
                  AQUI VIRÁ A PROPS.valor
                </textarea>
              </div>

              <div className='alteraDescricao'>
                <label for="descricao">Altere a descrição do livro: </label>
                <textarea id="descricao" name="descricao" rows="1" cols="33">
                  AQUI VIRÁ A PROPS.DESCRICAO
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
