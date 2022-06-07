import React, { useEffect } from "react";
import logo from "../media/logo.png";
import "../styles/Header.css";

const Header = () => {
  useEffect(() => {
    let header__burger = document.querySelector(".header__burger");
    let header__menu = document.querySelector(".header__menu");
    let body = document.querySelector("body");

    header__burger.onclick = function () {
      header__burger.classList.toggle("active");
      header__menu.classList.toggle("active");
      body.classList.toggle("lock");
    };

    // let menu__span = document.querySelector(".menu__span");
    // let menu__list__li = document.querySelector(".menu__list__li");

    // menu__span.onclick = function () {
    //   menu__list__li.classList.toggle("active");
    // };

    let header__city = document.querySelector(".header__city");
    let header__city__selector__li = document.querySelector(
      ".header__city__selector__li"
    );

    header__city.onclick = function () {
      header__city__selector__li.classList.toggle("active");
    };
  });

  return (
    <header className="header">
      <div className="header_container">
        <div className="header__body">
          <div className="header__logo">
            <img src={logo} loading="lazy" alt="Лого" />
          </div>

          <div className="header__burger">
            <span></span>
          </div>

          <nav className="header__menu">
            <ul className="header__list">
              <li className="header__city__selector__li">
                <span className="header__city">Город</span>

                <ul className="city__selector__list">
                  <li>
                    <span className="sub-city__selector__list">
                      Южно-Сахалинск
                    </span>
                  </li>

                  <li>
                    <span className="sub-city__selector__list">Корсаков</span>
                  </li>

                  <li>
                    <span className="sub-city__selector__list">Оха</span>
                  </li>
                </ul>
              </li>

              <li className="header__menu__li">
                <a href="#menu" className="header__link">
                  Меню
                </a>
              </li>

              <li className="header__contact__li">
                <a href="#contact" className="header__link">
                  Контакты
                </a>
              </li>

              <li className="header__enter__li">
                <a href="#login" className="header__link">
                  Вход
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
