import React from "react";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className={style.NavBar}>
      <Link to="/add">
        <a href="" className={style.link}>
          + Livros
        </a>
      </Link>
      <Link to="/contato">
        <a href="" className={style.link}>
          Contato
        </a>
      </Link>
    </div>
  );
}
