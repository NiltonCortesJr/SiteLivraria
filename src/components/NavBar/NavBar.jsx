import React from "react";
import style from "./NavBar.module.css"

export default function NavBar () {
    return (
        <div className={style.NavBar}>
            <a href="" className="link">Livros</a>
            <a href="" className="link"> Contato</a>
        </div>
    )
}