import React from "react";
import Wrapper from "./Layouts/Wrapper";
import { lexend } from "./Fonts/Fonts";
import Image from "next/image";
import hero_image_third from "public/images/hero_image_third.png";

const HeroSectionFifth = () => {
  return (
    <section>
      <Wrapper>
        <h1
          className={`${lexend.className} color text-[34px] font-bold text-[#3366FF]`}
        >
          &quot;One Step Closer to More Effective and Connected
          Communication!&quot;
        </h1>
        <div>
          <Image
            src={hero_image_third}
            alt="hero_image_third"
            width={216}
            height={208}
          />
          <a className="flex w-full items-center justify-center rounded-xl bg-[#3366FF] py-[10px] text-white">
            Bisnis dan Pemasaran
          </a>
          <ul className="mt-3 flex flex-col items-center gap-3 px-3">
            <li className="flex w-full items-center justify-center rounded-xl bg-[#F3F5F8] py-[10px] text-[#3366FF]">
              Komersial dan Penjualan
            </li>
            <li className="text-[#3366FF]">Organisasi Sosial</li>
          </ul>
          <p className="mt-7 font-medium">
            Bidang ini dapat memanfaatkan fitur broadcast untuk mengirim
            promosi, pengumuman, dan informasi produk kepada pelanggan dalam
            jumlah besar secara efisien. Sementara itu, fitur campaign dapat
            membantu merencanakan dan menyampaikan pesan iklan dengan waktu yang
            tepat kepada target audiens yang sesuai.
          </p>
        </div>
      </Wrapper>
    </section>
  );
};

export default HeroSectionFifth;
