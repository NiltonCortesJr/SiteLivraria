import React from "react";
import './Pesquisa.css'

export default function Pesquisa () {
    return (
        <div className="Pesquisa">
            <input type="text" class="Pesquisa__input" placeholder="Livro, Gênero ou Autor"/>
            <a className="Buscar" href="https://www.youtube.com/">
                <img id = "lupa" className = "Buscar" src="https://cdn-icons-png.flaticon.com/512/16/16492.png"  alt="pesquisaIcone"/>
            </a>
        </div>
    )
}
