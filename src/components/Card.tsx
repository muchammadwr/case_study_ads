import React from "react";
import { lexend } from "./Fonts/Fonts";
import time_auto from "public/icons/time_auto.svg";
import cast from "public/icons/cast.svg";
import data_exploration from "public/icons/data_exploration.svg";
import contacts from "public/icons/contacts.svg";
import mobile from "public/icons/mobile.svg";
import excel from "public/icons/excel.svg";
import sync from "public/icons/sync.svg";
import Image from "next/image";
interface CardProps {
  title: string;
  detail: string;
  priceDiskon: string | number;
  priceOri: string | number;
  cta: string;
}

const listCard = [
  {
    icon: time_auto,
    detail: "100 Auto reply",
  },
  {
    icon: cast,
    detail: "500 Broadcast",
  },
  {
    icon: data_exploration,
    detail: "50 Campaign",
  },
  {
    icon: contacts,
    detail: "500 Contact",
  },
  {
    icon: mobile,
    detail: "50 Device",
  },
  {
    icon: excel,
    detail: "Excel / CSV Contact Import",
  },
  {
    icon: sync,
    detail: "Google Contact Sync",
  },
];

const Card = (props: CardProps) => {
  const { title, detail, priceDiskon, priceOri, cta } = props;
  return (
    <div className="flex w-60 flex-col gap-1 p-4">
      <div className="flex flex-col gap-1">
        <h1 className={`${lexend.className} text-[20px] font-bold`}>{title}</h1>
        <p className="text-[10px] font-medium">{detail}</p>
      </div>
      <div className="gap flex flex-col">
        <h1 className={`${lexend.className} text-[20px] font-bold`}>
          {priceDiskon} <span className="text-[12px]">/bulan</span>
        </h1>
        <p className="text-xs font-semibold text-[#777C88]">{priceOri}</p>
      </div>
      <button className="flex w-auto items-center justify-center rounded-lg px-1 hover:bg-[#FFB020] bg-[#3366FF] py-[10px] text-white">
        {cta}
      </button>
      <ul className="flex flex-col gap-[12px]">
        {listCard.map((item, index) => (
          <li key={index} className="flex flex-row gap-[6.75px]">
            <Image src={item.icon} alt={item.detail} width={24} height={24} />
            <span className="text-[12px] font-medium">{item.detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
