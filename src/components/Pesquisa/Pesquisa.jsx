import React from "react";
import './Pesquisa.css'

export default function Pesquisa () {
    return (
        <div className="Pesquisa">
            <input type="text" class="Pesquisa__input" placeholder="Livro, gênero ou autor"/>
            <a className="Buscar" href="https://www.youtube.com/">
                <img id = "lupa" className = "Buscar" src="https://i.imgur.com/lbqycp1.png"  alt="pesquisaIcone"/>
            </a>
        </div>
    )
}
