import React from "react";
import style from './Pesquisa.module.css'

export default function Pesquisa () {
    return (
        <div className={style.Pesquisa}>
            <input type="text" className={style.PesquisaInput} placeholder="Livro, gênero ou autor"/>
            <a className={style.Buscar} href="https://www.youtube.com/">
                <img id = {style.lupa} className = {style.Buscar} src="https://i.imgur.com/lbqycp1.png"  alt="pesquisaIcone"/>
            </a>
        </div>
    )
}
