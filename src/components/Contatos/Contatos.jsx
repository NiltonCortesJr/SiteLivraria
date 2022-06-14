import React from "react";
import style from "./Contatos.module.css";

export default function Contatos() {
  return (
    <>
      <div className={style.spinner}>
        <span>E</span>
        <span>Q</span>
        <span>U</span>
        <span>I</span>
        <span>P</span>
        <span>E</span>
      </div>
      <main className={style.main}>
        <div className={style.card}>
          <a href="https://www.linkedin.com/in/izadora-ferreira-dos-santos-0504b2177/">
            <img
              src="https://media-exp2.licdn.com/dms/image/C4D03AQFayjtrTqVUZQ/profile-displayphoto-shrink_200_200/0/1638466477221?e=1660176000&v=beta&t=KAAN_HZJKWyUiRR-3T-aqliIZgZj6Lugy3xeJarfsOo"
              className={style.cardImg}
            />
          </a>
          <div className={style.cardCampos}>
            <h3>Izadora Ferreira</h3>
            <p>Desenvolvedora Full Stack</p>
          </div>
        </div>

        <div className={style.card}>
          <a href="https://www.linkedin.com/in/jos%C3%A9-camara-etchichury-filho-95190a125/">
            <img
              src="https://user-images.githubusercontent.com/92602538/172968378-1045ee03-1e9d-4a75-a5c2-b03f187647dd.jpg"
              className={style.cardImg}
            />
          </a>
          <div className={style.cardCampos}>
            <h3>José Etchichury</h3>
            <p>Desenvolvedor Full Stack</p>
          </div>
        </div>

        <div className={style.card}>
          <a href="https://www.linkedin.com/in/vitor-del-duca-gestao-programacao-treinamento/">
            <img
              src="https://avatars.githubusercontent.com/u/96198686?v=4"
              className={style.cardImg}
            />
          </a>
          <div className={style.cardCampos}>
            <h3>Vítor Del' Duca</h3>
            <p>Desenvolvedor Full Stack</p>
          </div>
        </div>

        <div className={style.card}>
          <a href="https://www.linkedin.com/in/guilherme-santiago-de-oliveira-04153a238/">
            <img
              src="https://media-exp2.licdn.com/dms/image/C5603AQHoABWRsNzzgg/profile-displayphoto-shrink_200_200/0/1650480397323?e=1660176000&v=beta&t=iVjgQGtZwsEVnF0llh0pCHDrwOzSt-Fzil0XV_lRIJM"
              className={style.cardImg}
            />
          </a>
          <div className={style.cardCampos}>
            <h3>Guilherme Santiago</h3>
            <p>Desenvolvedor Full Stack</p>
          </div>
        </div>

        <div className={style.card}>
          <a href="https://www.linkedin.com/in/niltoncjr/">
            <img
              src="https://avatars.githubusercontent.com/u/88124966?v=4"
              className={style.cardImg}
            />
          </a>
          <div className={style.cardCampos}>
            <h3>Nilton Jr</h3>
            <p>Desenvolvedor Full Stack</p>
          </div>
        </div>
      </main>
    </>
  );
}
