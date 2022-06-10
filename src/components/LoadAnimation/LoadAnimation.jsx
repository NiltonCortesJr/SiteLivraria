import React, { useState, useEffect } from "react";
import Styles from "./LoadAnimation.css";
function LoadAnimation() {
  useEffect(() => {
    const altura = window.innerHeight - 240;
    console.log(altura);
    document.querySelector("._containerSelecao_1ypzk_1").style.height =
      altura + "px";
  }, []);

  return (
    <div className="bookshelf_wrapper">
      <ul className="books_list">
        <li className="book_item first"></li>
        <li className="book_item second"></li>
        <li className="book_item third"></li>
        <li className="book_item fourth"></li>
        <li className="book_item fifth"></li>
        <li className="book_item sixth"></li>
      </ul>
      <div className="shelf"></div>
    </div>
  );
}

export default LoadAnimation;
