import React from "react";

interface CardProps {
  title: string;
  detail: string;
  priceDiskon: string | number;
  priceOri: string | number;
}

const list = [
  {
    icon: "",
    detail: "",
  },
];

const Card = (props: CardProps) => {
  const { title, detail, priceDiskon, priceOri } = props;
  return (
    <div className="w-60">
      <div>
        <h1>{title}</h1>
        <p>{detail}</p>
      </div>
      <div>
        <h1>{priceDiskon} /bulan</h1>
        <p>{priceOri}</p>
      </div>
      <button>Get Started</button>
    </div>
  );
};

export default Card;
