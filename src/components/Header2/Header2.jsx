import React from "react";
import style from "./Header2.module.css"
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

export default function Header2() {
  return (
    <div className={style.Header2}>
      <Link to="/">
        <img
          src="https://cdn.discordapp.com/attachments/966082131090632786/981712331614617630/unknown.png"
          alt="logo"
          className={style.logo}
        />
      </Link>
      <NavBar />
    </div>
  );
}
