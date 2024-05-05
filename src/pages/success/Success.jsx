import React from "react";
import ellipseSuccess from "../../assets/images/Ellipse9.png";
import ellipseSuccess1 from "../../assets/images/Ellipse10.png";
import ellipseSuccess2 from "../../assets/images/Ellipse11.png";
import ellipseSuccess3 from "../../assets/images/Ellipse12.png";
import flowerSuccess from "../../assets/images/flower5.png";
import loverSuccess from "../../assets/images/lover.png";
import "./Success.scss";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="success-container">
      <div className="container">
        <div className="success-header">Оплата прошла</div>
        <div className="success-main">
          <div className="success-main-content">
            <div className="line"></div>
            <div className="success-main-content-text">успешно!</div>
          </div>
          <div className="success-content">
            <div className="order-number">
              Ваш номер заказа – <p>395808599</p>
            </div>
            <div className="notification">
              Спасибо за заказ! <br /> Вы получите уведомление о статусе вашего
              заказа
            </div>
            <div className="success-link">
              <Link to="/">на главную</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="position-success">
        <img src={ellipseSuccess} alt="success image" />
      </div>
      <div className="position-success1">
        <img src={ellipseSuccess1} alt="success image" />
      </div>
      <div className="position-success2">
        <img src={ellipseSuccess2} alt="success image" />
      </div>
      <div className="position-success3">
        <img src={ellipseSuccess3} alt="success image" />
      </div>
      <div className="position-success4">
        <img src={flowerSuccess} alt="success flower" />
      </div>
      <div className="position-success5">
        <img src={loverSuccess} alt="success image" />
      </div>
    </div>
  );
}

export default Success;
