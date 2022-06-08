import React from "react";
import Styles from "./Footer.module.css";
import Logo_Livraria from "../../assets/LogoFooter/logo_Livraria.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={Styles.footer}>
      <div className={Styles.footerContainer}>
        <div className={Styles.footerDisplay}>
          <div className={Styles.footerImage}>
            <Link to="/">
              <img src={Logo_Livraria} />
            </Link>
          </div>
        </div>
        <div className={Styles.footerDisplay}>
          <div className={Styles.footerTitle}>Sobre a Livraria</div>
          <div className={Styles.footerText}>Projeto final do módulo 5 </div>
          <div className={Styles.footerText}>Projeto final do módulo 4 </div>
        </div>
        <div className={Styles.footerDisplay}>
          <div className={Styles.footerTitle}>Sobre Nós</div>
          <div className={Styles.footerText}>
            <Link to="/contato">
            <a  className={Styles.footerLink}>
              Conheça a Equipe
            </a>
            </Link>
          </div>
          <div className={Styles.footerText}>
            <a href="https://www.resilia.com.br/" className={Styles.footerLink}>
              Conheça a Resilia
            </a>
          </div>
        </div>
      </div>
      <div className={Styles.footerCopyright}>Todos os direitos reservados ©</div>
    </div>
  );
}
