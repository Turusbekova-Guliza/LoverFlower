import React from "react";

import ExtraOrder from "../../components/extra-order/ExtraOrder";
import extraData from "../../data/ExtraOrder";

import flowerCarousel2 from "../../assets/images/flower9.png";
import flowerCarousel from "../../assets/images/flower10.png";
import flowerCarousel1 from "../../assets/images/flower11.png";

import "./CardsProduct.scss";
import { Link } from "react-router-dom";

function CardsProduct() {
  return (
    <>
      <div className="card-header"></div>
      <div className="card-container">
        <div className="container">
          <div className="carousel-content">
            <div className="carousel-button">
              <div className="arrow arrow-top">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.86914 12.8392L9.58331 8.125L14.2975 12.8392L13.7083 13.4283L9.58331 9.30333L5.45831 13.4283L4.86914 12.8392Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="carousel-image">
                <img height="185px" src={flowerCarousel} alt="carousel image" />
                <img
                  height="185px"
                  src={flowerCarousel1}
                  alt="carousel image"
                />
              </div>
              <div className="arrow arrow-bottom">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1309 7.16083L10.4167 11.875L5.70253 7.16083L6.29169 6.57167L10.4167 10.6967L14.5417 6.57167L15.1309 7.16083Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="carousel-result">
              <img src={flowerCarousel2} alt="image" />
            </div>
            <div className="carousel-element">
              <Link to="/catalogPage" className="carousel-link">
                <div className="buttons-svg">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2713 12.1045L6.5 8.33316L10.2713 4.56183L10.7427 5.03316L7.44267 8.33316L10.7427 11.6332L10.2713 12.1045Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p>назад</p>
              </Link>
              <div className="carousel-price">
                <h2>рубиновые искры</h2>
                <div className="number-price">
                  <p>167.00 ₽</p>
                  <span>187.00 ₽</span>
                </div>
              </div>
              <div className="carousel-compound">
                <p>
                  <strong>Состав:</strong>Гвоздика (Диантус), Леукодендрон,
                  Леукоспермум (Нутан), Лотос, Роза
                </p>
                <p>
                  Завораживающая глубина ваших чувств передана огненными
                  красками этого букетаu
                </p>
              </div>
              <div className="carousel-category">
                <p>
                  <strong>Категории:</strong>8 марта, Букет на 14 февраля, Букет
                  на праздник, Букеты цветов на День рождения, Композиции из
                  цветов, Композиции из цветов в коробке
                </p>
                <p>
                  <strong>Метки:</strong> Для начальника, Мужские букеты
                </p>
              </div>
              <div className="carousel-card-content">
                <button>В корзину</button>
                <div className="carousel-count">
                  <p>-</p>
                  <span>1</span>
                  <p>+</p>
                </div>
              </div>
            </div>
          </div>
          <div className="dop-order-content">
            <h2>Дополнительно к заказу:</h2>
            <div className="dop-order">
              {extraData.map((el) => (
                <ExtraOrder key={el.id} item={el} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardsProduct;
