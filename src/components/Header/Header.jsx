import React, { useEffect, useState } from "react";
import style from "./Header.module.css";
import Pesquisa from "../Pesquisa/Pesquisa";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PesquisaContext } from "../../context/PesquisaContext";

export default function Header() {
  const {value, setValue} = useContext (PesquisaContext)
  
  return (
    <div className={style.Header}>
      <Link to="/">
        <img
          src="https://cdn.discordapp.com/attachments/966082131090632786/981712331614617630/unknown.png"
          alt="logo"
          className={style.logo}
        />
      </Link>
      <Pesquisa value={value} onChange={(pesquisa) => setValue(pesquisa.target.value)}/>
      <NavBar />
    </div>
  );
}
