import React from "react";
import ellipseAbout from "../../assets/images/Ellipse4.png";
import ellipseAbout1 from "../../assets/images/Ellipse5.png";
import ellipseAbout2 from "../../assets/images/Ellipse6.png";
import ellipseAbout3 from "../../assets/images/Ellipse7.png";
import ellipseAbout4 from "../../assets/images/Ellipse8.png";
import flowerAbout from "../../assets/images/flower2.png";
import flowerAbout1 from "../../assets/images/flower3.png";
import flowerAbout2 from "../../assets/images/flower4.png";
import "./About.scss";

function About() {
  return (
    <div className="about-container">
      <div className="container">
        <div className="about-component1">
          <h2 className="about-text">О НАС</h2>
          <div className="about-content">
            <div className="content">
              <h2 className="content-text">
                Lover <br /> flower
              </h2>
              <div className="line"></div>
            </div>
            <div className="block-content">
              <h2>молодая команда разных людей с одинаковыми ценностями.</h2>
              <p>
                Мы считаем, что удовольствие от качества длится дольше, чем
                удовольствие от низкой цены. И поэтому в создание нашей
                букетерии мы вложили все, чем располагаем: душу, сердце, время и
                мечты! Мы готовы обещать вам только то, что можем сделать. А
                делаем мы только самое качественное, самое интересное и
                обязательно уникальное. Мы всегда честны со своими клиентами во
                всем – в нашем каталоге только те букеты, которые вы
                действительно сможете купить.
              </p>
            </div>
            <div className="position-image">
              <img src={ellipseAbout2} alt="about image" />
            </div>
          </div>
        </div>
        <div className="about-component2">
          <div className="content-2">
            <h2>гарантии</h2>
            <p>
              Каждый цветок уникален и чтобы вы были уверены в качестве, мы
              пришлем вам фотографию именно вашего букета до его отправки
              получателю. Вся предоставленная Вами информация конфиденциальна и
              будет известна только нам и курьеру для осуществления доставки.
            </p>
          </div>
          <div className="content-3">
            <h2>
              Заказ букетов на <br /> сайте компании <br /> Lower Flower – это:
            </h2>
            <ul>
              <li>выбор оттенков и сортов цветков в любое время года;</li>
              <li>отправка фото готовой композиции перед отправкой;</li>
              <li>возможность заказать цветы с доставкой в течение часа;</li>
              <li>
                выгодные цены – на сайте только те варианты, что Вы сможете
                купить;
              </li>
              <li>полная конфиденциальность по заказу;</li>
              <li>
                мы подбираем открытку, воздушные шар, подарок по Вашему желанию;
              </li>
              <li>
                в нашем уютном цветочном магазине цветы, которые приятно дарить.
              </li>
            </ul>
          </div>
        </div>
        <div className="about-component3">
          <div className="about-footer">
            Природная гармония цвета, <br /> неповторимость бутонов <br /> и
            Ваши чувства <br /> в нежных лепестках <br /> не оставят никого{" "}
            <br /> равнодушным.
          </div>
          <div className="about-footer-text">
            Вы выбираете и заказываете цветочный сюрприз, а мы вкладываем в него
            душу!
          </div>
        </div>
      </div>
      <div className="about-position">
        <img src={ellipseAbout} alt="about image" />
        <div className="about-position1">
          <img src={flowerAbout} alt="about image" />
        </div>
      </div>
      <div className="about-position2">
        <img src={ellipseAbout1} alt="" />
        <div className="about-position3">
          <img src={flowerAbout1} alt="about image" />
        </div>
      </div>
      <div className="about-position4">
        <img src={ellipseAbout3} alt="about image" />
      </div>
      <div className="about-position5">
        <img src={ellipseAbout4} alt="about image" />
      </div>
      <div className="about-position6">
        <img src={flowerAbout2} alt="about image" />
      </div>
    </div>
  );
}

export default About;
