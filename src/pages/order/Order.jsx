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
      <section className="section__order-2"></section>
    </main>
  );
}

export default Order;
