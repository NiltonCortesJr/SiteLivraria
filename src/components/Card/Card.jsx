import React from "react";
import "./Card.css";
import Button from "../Button/Button";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Card() {
  return (
    <>
    <Header /> 
    <main className="main">
      <form className="card">
        <img
          id="image"
          src="https://m.media-amazon.com/images/P/B01NASOQGG.01._SCLZZZZZZZ_SX500_.jpg"
          className="card-img"
        />
        <div className="card-campos">
          {/* aqui vai o título  */}
          <h1>A casa caiu!</h1>
          
          <div className="Autora">
            <h2>Autor(a):</h2>
            <label className="label" for="autora">
              Zé da Silva Silva e Silva{" "}
            </label>
          </div>

          <div className="Preco">
            <h2>Preço:</h2>
            <label className="label" for="preco">
              R$ 30,00{" "}
            </label>
          </div>
          
          <div className="Descricao">
            <h2> Descrição:</h2>
            <label className="label" for="descricao">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci inventore impedit alias quidem? Esse laudantium dolores atque harum omnis? Quas, itaque harum. Eveniet nesciunt quia debitis deserunt voluptas pariatur ad
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus rerum accusamus quas iusto, saepe dicta soluta ipsam harum asperiores corrupti? Similique dolor consequatur nesciunt optio eum alias saepe? Autem, eius.
            </label>
          </div>
          
          <div className="button">
            <Button text="Editar" />
            <Button text="Voltar" />
          </div>
        </div>
      </form>
    </main>
    <Footer />
    </>
  );
}
