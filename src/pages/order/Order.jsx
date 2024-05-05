import React from "react";
import "./Order.scss";
import Rose1 from "../../assets/svg/image 147 order rose 2.svg";
import Rose2 from "../../assets/svg/image 148 order rose 1.svg";
import Text from "../../assets/svg/lover flower text.svg";
import BlueBack from "../../assets/svg/Ellipse 32 blue rose back.svg";
import RedBack from "../../assets/svg/Ellipse 45 red rose back.svg";

function Order() {
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
          <div className="order__checkout">
            <h3 className="checkout__title">Оформление заказа</h3>
            <p className="order_data">Контактные данные</p>
            <div className="check__name">
              <p className="check__p">Ваше имя*</p>
              <input
                className="check__input"
                type="name"
                placeholder="Введите ваше имя"
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
            <h4 className="check__delivery">Доставка</h4>
            <input className="pick__input" type="radio" name="" id="pick" />
            <label className="check_label">Самовывоз</label>
            <input className="pick__input" type="radio" name="" id="pick" />
            <label className="check_label">Доставка курьером</label>
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
                type="text"
                placeholder="__/__"
              />
            </div>
            <p className="price_del">Стоимость доставки 0 ₽</p>
            <h4 className="check__delivery">Оплата</h4>
            <input className="pick__input" type="radio" name="" id="pick" />
            <input className="pick__input" type="radio" name="" id="pick" />
            <input className="pick__input" type="radio" name="" id="pick" />
            <input className="pick__input" type="radio" name="" id="pick" />
            <input className="pick__input" type="radio" name="" id="pick" />
            <input className="pick__input" type="radio" name="" id="pick" />
          </div>
          <div className="order__order-block"></div>
        </div>
      </section>
    </main>
  );
}

export default Order;
