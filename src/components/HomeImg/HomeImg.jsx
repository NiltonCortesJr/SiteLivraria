import React from "react";
import style from "./HomeImg.module.css"

export default function HomeImg () {
    return (
        <div className={style.containerSelecao}>
            <img src="../src/assets/Promo/selecao.jpg" alt="seleção especial, cupom 10%OFF LIBER10" className={style.selecao}/>
        </div>
    )
}