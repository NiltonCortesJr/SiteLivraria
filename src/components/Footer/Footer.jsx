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
              <img src={Logo_Livraria} className={Styles.logo}/>
              <img src="https://github.com/NiltonCortesJr/SiteLivraria/blob/main/src/assets/miniLogo/logoliber.png?raw=true" className={Styles.miniLogo}/>
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
            <Link className={Styles.footerLink} to="/contato">
              Conheça a Equipe
            </Link>
          </div>
          <div className={Styles.footerText}>
            <a href="https://www.resilia.com.br/" className={Styles.footerLink}>
              Conheça a Resilia
            </a>
          </div>
        </div>
      </div>
      <div className={Styles.footerCopyright}>
        Todos os direitos reservados ©
      </div>
    </div>
  );
}
