import React from "react";
import "./ExtraOrder.scss";

function ExtraOrder({ item }) {
  return (
    <div className="card-order">
      <div className="card-order-title">{item.title}</div>
      <div className="card-order-text">{item.text}</div>
      <div className="card-background"></div>
    </div>
  );
}

export default ExtraOrder;
