import React from "react";
import style from "./HomeImg.module.css"

export default function HomeImg () {
    return (
        <div className={style.containerSelecao}>
            <img src="https://github.com/NiltonCortesJr/SiteLivraria/blob/main/src/assets/Promo/selecao.jpg?raw=true" alt="seleção especial, cupom 10%OFF LIBER10" className={style.selecao}/>
            <div className={style.populares}>
                <p>Conheça os livros mais populares da semana</p>
            </div>
        </div>
    )
}