import React from "react";

import ellipseNot from "../../assets/images/Ellipse13.png";
import ellipseNot1 from "../../assets/images/Ellipse14.png";
import ellipseNot2 from "../../assets/images/Ellipse15.png";

import numberFour from "../../assets/images/four.png";
import flowerNot from "../../assets/images/flower6.png";
import flowerNot1 from "../../assets/images/flower7.png";
import flowerNot2 from "../../assets/images/flower8.png";
import zeroNumber from "../../assets/images/zero.png";
import loverNot from "../../assets/images/lover1.png";

import "./NotFound.scss";

function NotFound() {
  return (
    <>
      <div className="not"></div>
      <div className="not-container">
        <div className="container">
          <div className="not-number">
            <div className="position-number">
              <img src={numberFour} alt="image number" />
            </div>
            <div className="position-number1">
              <img src={numberFour} alt="image number" />
            </div>
          </div>
          <div className="zero-number">
            <img src={zeroNumber} alt="" />
          </div>
          <div className="flower-not">
            <img src={flowerNot} alt="" />
          </div>
          <div className="flower-not1">
            <img src={flowerNot1} alt="image" />
            <div className="flower-not2">
              <img src={flowerNot2} alt="image" />
            </div>
          </div>
          <div className="position-not">
            <img src={ellipseNot} alt="image" />
          </div>
          <div className="position-not1">
            <img src={ellipseNot1} alt="image" />
          </div>
          <div className="position-not2">
            <img src={loverNot} alt="" />
          </div>
          <div className="position-not3">
            <img src={ellipseNot2} alt="image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
