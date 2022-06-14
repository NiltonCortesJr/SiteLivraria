import React from "react";
import style from './Pesquisa.module.css'

const Pesquisa = ({value, onChange}) => {
//     function handleChange (event, onChange) {
//         onChange(event.target.value);
//     }
    // const handleChange2 = handleChange.bind (handleChange)
    return (
        <div className={style.Pesquisa}>
            <input 
            type="search" 
            className={style.PesquisaInput} 
            placeholder="Livro, gênero ou autor"
            value={value}
            onChange={onChange}
            />
            <a className={style.Buscar} href="https://www.youtube.com/">
                <img id = {style.lupa} className = {style.Buscar} src="https://i.imgur.com/lbqycp1.png"  alt="pesquisaIcone"/>
            </a>
        </div>
    )
}

export default Pesquisa