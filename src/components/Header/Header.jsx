import React from "react";
import style from "./Header.module.css";
import Pesquisa from "../Pesquisa/Pesquisa";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={style.Header}>
      <Link to="/">
        <img
          src="https://cdn.discordapp.com/attachments/966082131090632786/981712331614617630/unknown.png"
          alt="logo"
          className={style.logo}
        />
      </Link>
      <Pesquisa />
      <NavBar />
    </div>
  );
}
