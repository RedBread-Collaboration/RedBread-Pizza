import React from "react";
import "../styles/Footer.css";
import logo from "../media/logo_full.png";
import tg from "../media/telegram.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <img className="footer__logo" src={logo} alt="" />
        </div>
        <div className="footer__col">
          <div className="footer__col-title">
            <span>Меня сотворили:</span>
          </div>

          <div className="footer__contacts">
            <div className="footer__contact">
              <div className="tg__icon">
                <img src={tg} alt="" />
              </div>
              <span>
                <a href="https://t.me/Parzivalll">@Parzivalll</a>
              </span>
            </div>

            <div className="footer__contact">
              <div className="tg__icon">
                <img src={tg} alt="" />
              </div>
              <span>
                <a href="https://t.me/Parzivalll">@IT_KittyK</a>
              </span>
            </div>

            <div className="footer__contact">
              <div className="tg__icon">
                <img src={tg} alt="" />
              </div>
              <span>
                <a href="https://t.me/Parzivalll">@HaroldBlakk</a>
              </span>
            </div>

            <div className="footer__contact">
              <div className="tg__icon">
                <img src={tg} alt="" />
              </div>
              <span>
                <a href="https://t.me/Parzivalll">@syrnnik</a>
              </span>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;

