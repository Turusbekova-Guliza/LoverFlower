import React, { useState } from "react";
import "./Order.scss";
import Rose1 from "../../assets/svg/image 147 order rose 2.svg";
import Rose2 from "../../assets/svg/image 148 order rose 1.svg";
import Text from "../../assets/svg/lover flower text.svg";
import BlueBack from "../../assets/svg/Ellipse 32 blue rose back.svg";
import RedBack from "../../assets/svg/Ellipse 45 red rose back.svg";
import { Link } from "react-router-dom";
import Payment from "../../assets/svg/payment order.svg";
import Redtop from '../../assets/svg/Ellipse 47 order red top.svg'
import Bluetop from '../../assets/svg/Ellipse 46 order blue top.svg'
import BlueLeft from '../../assets/svg/Ellipse 43 order left blue.svg'
import Bluebottom from '../../assets/svg/Ellipse 42 order blue right.svg'
import Redbottom from '../../assets/svg/Ellipse 41 order red right.svg'

function Order() {
  const [value, setValue] = useState("");

  const handleInputChange = (event) => {
    let inputValue = event.target.value;

    const cleanedValue = inputValue.replace(/\D/g, "");

    const trimmedValue = cleanedValue.slice(0, 4);

    if (trimmedValue.length > 2) {
      const firstPart = trimmedValue.slice(0, 2);
      const secondPart = trimmedValue.slice(2);
      inputValue = `${firstPart}:${secondPart}`;
    } else {
      inputValue = trimmedValue;
    }

    setValue(inputValue);
  };
  return (
    <main className="main__order">
      <section className="section__order-1">
        <img className="blue__rose-1" src={Rose1} alt="" />
        <img className="blue__elipse-1" src={BlueBack} alt="" />
        <img className="red__rose-2" src={Rose2} alt="" />
        <img className="red__elipse-2" src={RedBack} alt="" />
        <div className="container">
          <div className="order__title__block">
            <h2 className="order__title-top">оформление</h2>
            <h2 className="order__title-bottom">заказа</h2>
            <img className="lover-flower" src={Text} alt="" />
          </div>
        </div>
      </section>
      <section className="section__order-2">
        <div className="container">
          <div className="order__product_block">
            <div className="order__checkout-block">
              <h3 className="checkout__title">Оформление заказа</h3>
              <p className="order_data">Контактные данные</p>
              <div className="check__name">
                <p className="check__p">Ваше имя*</p>
                <input
                  type="text"
                  placeholder="Иванов Иван"
                  className="check__input"
                  required
                />
              </div>
              <div className="check__name">
                <p className="check__p">Ваш телефон*</p>
                <input
                  className="check__input"
                  type="number"
                  placeholder="+996 ..."
                />
              </div>
              <div className="check__name">
                <p className="check__p">Ваш e-mail*</p>
                <input
                  className="check__input"
                  type="email"
                  placeholder="Введите вашу почту"
                />
              </div>
              <div className="check__name">
                <p className="check__p">Телефон получателя (необязательно)</p>
                <input
                  className="check__input"
                  type="number"
                  placeholder="+996 ..."
                />
              </div>
              <div className="check__name">
                <p className="check__p">Имя получателя (необязательно)</p>
                <input
                  className="check__input"
                  type="name"
                  placeholder="Введите имя получателя"
                />
              </div>
              <div className="check__name">
                <p className="check__p">Комментарий к заказу</p>
                <input
                  className="check__input"
                  type="text"
                  placeholder="Примечания к вашеу заказу,  особые пожелания отделу доставки"
                />
              </div>
              <h4 className="order_data">Доставка</h4>
              <div className="order__block-input">
                <input
                  className="pick__input"
                  type="radio"
                  name="delivery"
                  value="delivery1"
                  id=""
                />
                <label className="check_label">Самовывоз</label>
              </div>
              <div className="order__block-input">
                <input
                  className="pick__input"
                  type="radio"
                  name="delivery"
                  value="delivery2"
                  id=""
                />
                <label className="check_label">Доставка курьером</label>
              </div>
              <div className="check__name">
                <p className="check__p">Город*</p>
                <input
                  className="check__input"
                  type="text"
                  placeholder="Выберите город"
                />
              </div>
              <div className="check__name">
                <p className="check__p">Улица*</p>
                <input
                  className="check__input"
                  type="text"
                  placeholder="Введите улицу"
                />
              </div>
              <div className="checkout__address">
                <div className="address__name">
                  <p className="address__p">Корп/стр</p>
                  <input
                    className="address__input"
                    type="text"
                    placeholder="Корп/стр"
                  />
                </div>
                <div className="address__name">
                  <p className="address__p">Дом</p>
                  <input
                    className="address__input"
                    type="text"
                    placeholder="Дом"
                  />
                </div>
                <div className="address__name">
                  <p className="address__p">Кв/офис</p>
                  <input
                    className="address__input"
                    type="text"
                    placeholder="Кв/офис"
                  />
                </div>
              </div>
              <div className="address__name">
                <p className="address__p">Время доставки</p>
                <input
                  className="address__input"
                  type="еуче"
                  value={value}
                  onChange={handleInputChange}
                  maxLength={5}
                  placeholder="__/__"
                />
              </div>
              <p className="price_del">
                Стоимость доставки <span>0</span> ₽
              </p>
              <h4 className="check__delivery">Оплата</h4>
              <div className="order__block-input">
                <input
                  className="pick__input"
                  type="radio"
                  name="ordered"
                  value="ordered1"
                  id=""
                />
                <label className="check_label">Банковская карта</label>
              </div>
              <div className="order__block-input">
                <input
                  className="pick__input"
                  type="radio"
                  name="ordered"
                  value="ordered2"
                  id=""
                />
                <label className="check_label">Наличными</label>
              </div>
              <div className="order__block-input">
                <input
                  className="pick__input"
                  type="radio"
                  name="ordered"
                  value="ordered3"
                  id=""
                />
                <label className="check_label">Apple pay</label>
              </div>
              <div className="order__block-input">
                <input
                  className="pick__input"
                  type="radio"
                  name="ordered"
                  value="ordered4"
                  id=""
                />
                <label className="check_label">Google pay</label>
              </div>
              <div className="order__block-input">
                <input
                  className="pick__input"
                  type="radio"
                  name="ordered"
                  value="ordered5"
                  id=""
                />
                <label className="check_label">Криптовалюта</label>
              </div>
              <div className="order__block-input">
                <input
                  className="pick__input"
                  type="radio"
                  name="ordered"
                  value="ordered6"
                  id=""
                />
                <label className="check_label">С расчетного счета</label>
              </div>
              <p className="promocode__p">Промокод</p>
              <div className="promocode__block">
                <input placeholder="Промокод" className="address__input" />
                <button className="address__input btn__promocode">Применить</button>
              </div>
              <div className="total__block">
                <p className="total__text">Общая сумма заказа</p>
                <div className="total__price">
                  <span>334.00</span> ₽
                </div>
              </div>
              <div className="order__sale">
                Скидка = <span>0</span> ₽
              </div>
              <div className="order__del__price">
                Доставка = <span>0</span> ₽
              </div>
              <button className="btn__order__pay">
                <Link to="#">К оплате</Link>
              </button>
              <div className="order__privacy_p">
                Нажимая на кнопку «К Оплате», я даю свое согласие на обработку
                персональных данных, в соответствии с{" "}
                <Link to="#">Политикой конфиденциальности,</Link> а так же
                ознакомлен с условиями оплаты и доставки
              </div>
              <img
                className="order__payment__img"
                src={Payment}
                alt="payment"
              />
            </div>
            <div className="order__order-block"></div>
          </div>
        </div>
         <img className="top__red" src={Redtop} alt="" />
         <img className="top__blue" src={Bluetop} alt="" />
         <img className="top__bottom_blue" src={Bluebottom} alt="" />
         <img className="top__bottom_red" src={Redbottom} alt="" />
         <img className="top__left" src={BlueLeft} alt="" />
      </section>
    </main>
  );
}

export default Order;
