import React from "react";
import "./Hero.css";
import Instagram from "../../assets/HeroImgINS.svg";
import Whatsapp from "../../assets/Wothsap.svg";
import PhoneIson from "../../assets/HeroPhone.svg";
import Card from "../../assets/Card.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="home__wrapper">
        <section className="section__home-main">
          <div className="container">
            <div className="home-main">
              <div className="home-main__adress">
                ул. Тимирязева 67
                <span>10:00 до 21:00 без выходных</span>
              </div>
              <div className="home-main__socials">
                <h1 className="home-main__title">LOVER FLOWER</h1>
                <div className="home-main__socials-links">
                  <a href="#">
                    <img src={Instagram} alt="" />
                  </a>
                  <a href="#">
                    <img src={Whatsapp} alt="" />
                  </a>
                  <a href="#">
                    <img src={PhoneIson} alt="" />
                  </a>
                </div>
              </div>
              <div className="home-main__content">
                <div className="home-main__btn">
                  <div
                    style={{ color: "white" }}
                    className="subtitle_big subtitle_center"
                  >
                    Создаём для тех, кто ценит свежесть и изящество цветка
                  </div>
                  <Link className="btn btn_colored" to="/catalogPage">
                    смотреть каталог
                  </Link>
                  <div
                    className="home-main__contacts-call modal__btn modal__btn_mobile"
                    data-modal
                  >
                    заказать звонок
                  </div>
                </div>
                <div className="home-main__contacts">
                  <a
                    href="tel:+375291136969"
                    className="home-main__contacts-phone"
                  >
                    +375 (29) 113-69-69
                  </a>
                  <div
                    className="home-main__contacts-call modal__btn"
                    data-modal
                  >
                    заказать звонок
                  </div>
                  <div className="menu__handlbag">
                    <img src={Card} alt="" />
                    <span>5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div style={{ height: "406px" }}>
          <div className="hero__shadow"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
