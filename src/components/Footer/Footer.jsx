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
          <div className={Styles.footerText}>Projeto final do módulo 5 </div>
          <div className={Styles.footerText}>Projeto final do módulo 4 </div>
        </div>
        <div className={Styles.footerDisplay}>
          <div className={Styles.footerTitle}>Sobre Nós</div>
          <div className={Styles.footerText}>
            <a href="#" className={Styles.footerLink}>
              Conheça a Equipe
            </a>
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
