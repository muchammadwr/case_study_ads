import React from "react";
import Wrapper from "./Wrapper";
import { lexend } from "./Fonts/Fonts";
import Card from "./Card";

const listCard = [
  {
    title: "Starter",
    detail:
      "Mulai perjalanan Anda dengan paket Starter selama 14 hari. Nikmati pesan otomatis, siaran pesan, dan  manajemen kontak yang efisien. Dapatkan integrasi yang membantu dan sinkronisasi kontak WhatsApp.",
    priceDiskon: "Gratis",
    priceOri: "-",
    cta: "Start Now",
  },
  {
    title: "Basic",
    detail:
      "Dapatkan akses selama 1 bulan dengan paket Basic. Manfaatkan fitur pesan otomatis, siaran pesan, dan manajemen kontak yang ditingkatkan. Rasakan kenyamanan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.",
    priceDiskon: "Rp. 65.000",
    priceOri: "Rp. 650.000 /tahun",
    cta: "Get Started",
  },
  {
    title: "Premium",
    detail:
      "Perpanjang pengalaman Anda dengan paket Premium selama 1 bulan. Nikmati manfaat pesan otomatis, siaran pesan, dan manajemen kontak tanpa batasan. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.",
    priceDiskon: "Rp. 76.000",
    priceOri: "Rp. 800.000 /tahun",
    cta: "Get Started",
  },
  {
    title: "Pro",
    detail:
      "Jelajahi seluruh fitur dengan paket Pro selama 1 bulan. Dapatkan keuntungan dari pesan otomatis, siaran pesan, serta manajemen kontak yang tidak terbatas. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.",
    priceDiskon: "Rp. 86.000",
    priceOri: "Rp. 900.000 /tahun",
    cta: "Get Started",
  },
];

const Pricing = () => {
  return (
    <section className="pt-[107px] md:pt-[240px]">
      <Wrapper className="md:mx-auto md:flex md:max-w-5xl md:flex-col md:items-center md:justify-center">
        <div>
          <h1
            className={`${lexend.className} text-center text-[34px] font-bold`}
          >
            Our Pricing
          </h1>
          <div className="mt-5 items-center justify-center md:flex md:flex-col">
            <ul className="flex flex-row items-center justify-center gap-3">
              <li className="px-[25px] py-[10px]">Monthly</li>
              <li className="rounded-full bg-[#3366FF] px-[25px] py-[10px] text-white">
                Yearly
              </li>
            </ul>
            <p className="my-5 hidden rounded-2xl bg-[#E6E8F0] p-[8px] text-[#3366FF] md:visible">
              Hemat hingga 25% dengan paket tahunan
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col flex-wrap items-center justify-center md:flex-row">
          {listCard.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Pricing;
