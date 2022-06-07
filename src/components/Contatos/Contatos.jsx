import React from "react";
import "./Contatos.css";
import Button from "../Button/Button";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Contatos() {
  return (
    <>
      <Header /> 
        <h1>Equipe</h1>
      <main className="main">
            <div className="card">
              <a href="https://www.linkedin.com/in/izadora-ferreira-dos-santos-0504b2177/">
                  <img 
                  id="image"
                  src="https://media-exp2.licdn.com/dms/image/C4D03AQFayjtrTqVUZQ/profile-displayphoto-shrink_200_200/0/1638466477221?e=1660176000&v=beta&t=KAAN_HZJKWyUiRR-3T-aqliIZgZj6Lugy3xeJarfsOo"
                  className="card-img"/>
              </a>
              <div className="card-campos">
                  <h3>Izadora Ferreira</h3>
                  <h5>Dev Web Full Stack</h5>
              </div>
            </div>

            <div className="card">
              <a href="https://www.linkedin.com/in/jos%C3%A9-camara-etchichury-filho-95190a125/">
                  <img 
                  id="image"
                  src="https://media-exp2.licdn.com/dms/image/D4D35AQFhSOLoXzK-_w/profile-framedphoto-shrink_200_200/0/1645230228604?e=1655186400&v=beta&t=tw5XDrrQ1T0qQd15COBpj9y6LOzgRNLjAHFFxShrN_w"
                  className="card-img"/>
              </a>
              <div className="card-campos">
                  <h3>José Etchichury</h3>
                  <h5>Dev Web Full Stack</h5>
              </div>
            </div>

            <div className="card">
              <a href="https://www.linkedin.com/in/vitor-del-duca-gestao-programacao-treinamento/">
                  <img 
                  id="image"
                  src="https://media-exp2.licdn.com/dms/image/D4E35AQFr9MVXWP6oTw/profile-framedphoto-shrink_200_200/0/1638410184677?e=1655190000&v=beta&t=U2dWnrMds5yQns5KoN78PBr-A_-73L0SECpSFn6xauY"
                  className="card-img"/>
              </a>
              <div className="card-campos">
                  <h3>Vítor Del' Duca</h3>
                  <h5>Dev Web Full Stack</h5>
              </div>
            </div>

            <div className="card">
              <a href="https://www.linkedin.com/in/guilherme-santiago-de-oliveira-04153a238/">
                  <img 
                  id="image"
                  src="https://media-exp2.licdn.com/dms/image/C5603AQHoABWRsNzzgg/profile-displayphoto-shrink_200_200/0/1650480397323?e=1660176000&v=beta&t=iVjgQGtZwsEVnF0llh0pCHDrwOzSt-Fzil0XV_lRIJM"
                  className="card-img"/>
              </a>
              <div className="card-campos">
                  <h3>Guilherme S.</h3>
                  <h5>Dev Web Full Stack</h5>
              </div>
            </div>

            <div className="card">
              <a href="https://www.linkedin.com/in/niltoncjr/">
                  <img 
                  id="image"
                  src="https://media-exp2.licdn.com/dms/image/C4D35AQGu4spLmDPYNg/profile-framedphoto-shrink_200_200/0/1611194635356?e=1655179200&v=beta&t=LZW13Va0S88fmj9IxjsEbvjTd9l478Bili2IDO8vAkw"
                  className="card-img"/>
              </a>
              <div className="card-campos">
                  <h3>Nilton Cortes Jr</h3>
                  <h5>Dev Web Full Stack</h5>
              </div>
            </div>
      </main>
      <p>Clique nas fotos - LinkedIn</p>
      <Footer />
    </>
  );
}