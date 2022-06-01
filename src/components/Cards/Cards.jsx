import React from 'react'
import CardModelo from '../CardModelo/CardModelo'

export default function Cards() {
  return (
    <div className = 'container'>
        <CardModelo url = "https://m.media-amazon.com/images/P/B01NASOQGG.01._SCLZZZZZZZ_SX500_.jpg" titulo = 'Nós contra eles' autora = 'Raquel Mazza' valor = 'R$ 35,90'/>
        <CardModelo titulo = 'Na luta da programação' autora = 'Nilton Cortes' valor = '100,90'/>
        <CardModelo titulo = 'Mengão até morrer' autora = 'Vítor Del Duca' valor = '19,90'/>
        <CardModelo titulo = 'Em busca do emprego' autora = 'Resilia Educação' valor = '5,90'/>

    </div>
  )
}
