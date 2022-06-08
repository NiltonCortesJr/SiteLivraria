import React from "react";
import style from "./NavBar.module.css"

export default function NavBar () {
    return (
        <div className={style.NavBar}>
            <a href="" className={style.link}>Livros</a>
            <a href="" className={style.link}> Contato</a>
        </div>
    )
}