import React from "react";
import "./Mistake.scss";
import MistakeRoses from "../../assets/png/image 150.png";
import { Link } from "react-router-dom";

function Mistake() {
  return (
    <section className="mistake" style={{ backgroundColor: "black" }}>
      <div className="container">
        <div className="mistakeTexts" >
          <div className="mistakeHeroTexts">
            <h1>
              Ошибка <br /> <span>платежа</span>
            </h1>
          </div>
          <div className="tryAgainMistake">
            <div className="tryAgainBtn">
              <div className="tryAgainTexts">
                <p>Произошла ошибка...</p>
                <p className="tryTop">Попробуйте оплатить еще раз!</p>
              </div>
              <button className="tryAgainPay">Оплатить еще раз</button>
            </div>
            <div className="backToHero" >
              <Link to="/">
                <a href="/">Вернуться на главную</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img className="roses_img_mistake" src={MistakeRoses} alt="roses" />
      <div className="mistakeBlur">
        <svg
          width="465"
          height="509"
          viewBox="0 0 465 509"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_1_1247)">
            <ellipse
              cx="351.299"
              cy="90.7392"
              rx="83.3218"
              ry="176.584"
              transform="rotate(21.0974 351.299 90.7392)"
              fill="#7D2253"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_1_1247"
              x="0.881104"
              y="-326.745"
              width="700.836"
              height="834.969"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="125"
                result="effect1_foregroundBlur_1_1247"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="mistakeBlur2">
        <svg
          width="405"
          height="823"
          viewBox="0 0 405 823"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_1_1248)">
            <ellipse
              cx="54.0176"
              cy="418.083"
              rx="83.3218"
              ry="176.584"
              transform="rotate(21.0974 54.0176 418.083)"
              fill="#7D2253"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_1_1248"
              x="-296.4"
              y="0.598633"
              width="700.836"
              height="834.969"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="125"
                result="effect1_foregroundBlur_1_1248"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </section>
  );
}

export default Mistake;
