import React from "react";
import "./DelPay.scss";
import "./css/style.css";
import "./css/style.min.css";
import Rose1 from "../../assets/svg/image 156 rose.svg";
import Rose2 from "../../assets/svg/image 157 rose 2.svg";
import Rose3 from "../../assets/svg/image 158 rose 3.svg";
import LoverFlowerText from "../../assets/svg/lover flower text.svg";
import Text from "../../assets/svg/! text.svg";
import { Link } from "react-router-dom";

function DelPay() {
  return (
    <main className="delpay">
      <img className="rose1" src={Rose1} alt="" />
      <section className="section__promo">
        <div className="container">
          <div className="promo">
            <h2 className="title promo__title-top">доставка</h2>
            <h2 className="title promo__title-bottom">и оплата</h2>
            <div className="promo__content">
              <div className="promo__content-img">
                <img src={Text} alt="screamer" />
              </div>
              <h3 className="promo__content-title">Дорогие клиенты!</h3>
              <div className="promo__content-text">
                Во время пандемии (COVID-19) компания Lover Flower призывает
                всех меньше контактировать с другими людьми для защиты себя и
                своих близких. Именно поэтому мы организовали
                <span> БЕСКОНТАКТНУЮ ДОСТАВКУ</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="main_section_payment">
        <div className="section__payment">
          <div className="container">
            <div className="payment">
              <div className="payment__title">Способы оплаты</div>
              <div className="payment__items">
                <div className="payment__item">
                  <div className="payment__item-dot"></div>
                  <div className="payment__item-text">
                    БАНКОВСКОЙ КАРТОЙ ПРИ ОФОРМЛЕНИИ ЗАКАЗА ЧЕРЕЗ САЙТ или по
                    <a href="#"> ссылке</a>
                  </div>
                </div>
                <div className="payment__item">
                  <div className="payment__item-dot"></div>
                  <div className="payment__item-text">
                    НАЛИЧНЫМИ, БАНКОВСКОЙ КАРТОЙ ПРИ САМОВЫВОЗЕ или
                    <a href="#"> с расчетного счета орагнизации</a>
                  </div>
                </div>
                <div className="payment__item">
                  <div className="payment__item-dot"></div>
                  <div className="payment__item-text">
                    НАЛИЧНЫМИ ПРИ ДОСТАВКЕ КУРЬЕРОМ
                  </div>
                </div>
                <div className="payment__item">
                  <div className="payment__item-dot"></div>
                  <div className="payment__item-text">КРИПТОВАЛЮТОЙ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section__delivery">
          <div className="container">
            <div className="delivery__price">
              <div className="delivery__price-title">стоимость доставки</div>
              <ul className="delivery__price-list">
                <li>
                  <span className="fw-bold">Бесплатно</span> – при заказе на
                  сумму
                  <span className="color-green"> от 90 рублей</span>
                </li>
                <li>
                  <span className="fw-bold">10 рублей</span> – при заказе на
                  сумму
                  <span className="color-green"> менее 90 рублей</span>
                </li>
                <li>
                  Так же вы можете забрать ваш заказ самостоятельно по адресу:
                  <span className="color-green">
                    г. Минск, ул. Тимирязева д. 67, комн. 112 ежедневно с 10.00
                    до 21.00
                  </span>
                </li>
              </ul>
            </div>
            <div Name="delivery__terms">
              <div className="delivery__terms-title">Условия доставки</div>
              <ul className="delivery__terms-list">
                <li>
                  Доставка осуществляется по городу Минску в пределах МКАД
                  <span className="color-green"> в любой день</span>
                </li>
                <li>
                  Возможность, сроки и стоимость доставки за пределы МКАД,
                  доставки в ночное время, праздники⠀
                  <span className="color-green">
                    оговариваются с менеджером
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <img className="rose2" src={Rose2} alt="" />
        <div className="section__extra">
          <div className="section__extra-wrapper">
            <div className="container">
              <div className="extra__wrapper">
                <div className="extra__inner">
                  <div className="extra">
                    <div className="extra__title">Дополнительно:</div>
                    <div className="extra__text">
                      <p>
                        Доставка иному лицу возможна только в случае оплаты
                        заказа заказчиком. Доставка осуществляется не ранее чем
                        через 2 часа после оплаты заказа, но может быть ранее,
                        если букет есть в наличии либо по договорённости с
                        менеджером.
                      </p>
                      <p>Время ожидания курьера составляет 15 минут.</p>
                      <p>
                        В случае если на момент доставки цветов получателя нет
                        либо нет возможности по иным причинам произвести
                        доставку (указан неточный адрес, закрытая входная дверь,
                        контрольно-пропускная система и др.), мы оставляем за
                        собой право по собственному выбору:
                      </p>
                      <ul className="extra__text-list">
                        <li>оставить цветы тому, кто открыл дверь;</li>
                        <li>
                          с заказчиком согласовать повторную доставку, которая
                          дополнительно оплачивается;
                        </li>
                        <li>
                          отказаться от передачи цветов без возврата денежных
                          средств.
                        </li>
                      </ul>
                      <p>
                        Если вы либо иной получатель не получили заказ, вам
                        необходимо сообщить об этом менеджеру по телефону
                        <span className="color-green">+375 (29) 113 69 69</span>
                        .
                      </p>
                    </div>
                    <div className="extra__title">Возврат денег:</div>
                    <div className="extra__text">
                      <p>
                        При отказе заказчика от заказа в течение двух часов,
                        если заказ ещё не начал готовиться, средства
                        возвращаются в полном объёме. Если же флорист начал
                        подготовку, то заказчик имеет право на возврат 50%
                        стоимости, либо, если ещё не был оплачен, то обязан
                        оплатить 50%.
                      </p>
                      <p>
                        Цветы надлежащего качества возврату и обмену не
                        подлежат, а если имеются какие-либо недостатки в цветах
                        – возврат производится лишь если эти недостатки не
                        являются природными и естественными изъянами растения.
                        Возврат денежных средств производится незамедлительно на
                        тот счёт, с которого произошла оплата, их же поступление
                        на счёт зависит от платёжной системы.
                      </p>
                    </div>
                  </div>
                    <div className="extra__img">
                      <img src={LoverFlowerText} alt="lover-flower" />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="rose3" src={Rose3} alt="rose 3" />
      </section>
    </main>
  );
}

export default DelPay;
