import React from "react";
import Styles from "./Footer.module.css";
import Logo_Livraria from "../../assets/LogoFooter/logo_Livraria.png";
export default function Footer() {
  return (
    <div className={Styles.footer}>
      <div className={Styles.footerContainer}>
        <div className={Styles.footerDisplay}>
          <div className={Styles.footerImage}>
            <a href="#">
              <img src={Logo_Livraria} />
            </a>
          </div>
        </div>

        <div className={Styles.footerDisplay}>
          <div className={Styles.footerTitle}>Sobre a Livraria</div>
          <div className={Styles.footerText}>
            Projeto de Livraria usando React
          </div>
          <div className={Styles.footerText}>Projeto final do módolo 5 </div>
        </div>
        <div className={Styles.footerDisplay}>
          <div className={Styles.footerTitle}>Sobre Nós</div>
          <div className={Styles.footerText}>
            <a href="#" className={Styles.footerLink}>
              Conheça a Equipe de Desenvolvimento da Livraria
            </a>
          </div>

          <div className={Styles.footerText}>
            <a href="https://www.resilia.com.br/" className={Styles.footerLink}>
              Conheça a Resilia
            </a>
          </div>
        </div>
        <div className={Styles.footerDisplay}>
          <div></div>
        </div>
      </div>
      <div className={Styles.footerCopyright}>Direitos Reservados©</div>
    </div>
  );
}
