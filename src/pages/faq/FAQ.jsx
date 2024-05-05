import React, { useState } from "react";
import "./FAQ.scss";
import AccordionItem from "../../components/Accordion/AccordionItem";
import data from "../../data/Accordion";
import flower from "../../assets/images/flower.png";
import flower1 from "../../assets/images/flower1.png";
import elippse from "../../assets/images/Ellipse.png";
import elippse1 from "../../assets/images/Ellipse1.png";
import elippse2 from "../../assets/images/Ellipse2.png";
import elippse3 from "../../assets/images/Ellipse3.png";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-container">
      <div className="container">
        <div className="faq-content">
          <div className="line"></div>
          <h2>FAQ</h2>
        </div>
        <div className="accordion">
          {data.map((item, index) => (
            <AccordionItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={activeIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
      <div className="flower-position">
        <img src={flower} alt="" />
      </div>
      <div className="flower-position1">
        <img src={elippse} alt="" />
      </div>
      <div className="flower-position2">
        <img src={flower1} alt="" />
      </div>
      <div className="flower-position3">
        <img src={elippse1} alt="" />
      </div>
      <div className="flower-position4">
        <img src={elippse2} alt="" />
      </div>
      <div className="flower-position5">
        <img src={elippse3} alt="" />
      </div>
    </div>
  );
}

export default FAQ;
