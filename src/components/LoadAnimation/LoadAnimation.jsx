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
    <div class="bookshelf_wrapper">
      <ul class="books_list">
        <li class="book_item first"></li>
        <li class="book_item second"></li>
        <li class="book_item third"></li>
        <li class="book_item fourth"></li>
        <li class="book_item fifth"></li>
        <li class="book_item sixth"></li>
      </ul>
      <div class="shelf"></div>
    </div>
  );
}

export default LoadAnimation;
