import React from "react";
import "./Header.css";
import Pesquisa from "../Pesquisa/Pesquisa";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <img
          src="https://cdn.discordapp.com/attachments/966082131090632786/981712331614617630/unknown.png"
          alt="logo"
          class="logo"
        />
      </Link>
      <Pesquisa />
      <NavBar />
    </div>
  );
}
