import React from "react";
import Wrapper from "./Wrapper";
import { lexend } from "./Fonts/Fonts";
import Image from "next/image";
import hero_image_fifth from "public/images/hero_image_fifth.png";

const HeroSectionFifth = () => {
  return (
    <section className="py-[107px] md:py-[240px]">
      <Wrapper className="gap-14 md:mx-auto md:flex md:max-w-5xl md:flex-col md:items-center md:justify-center">
        <div>
          <h1
            className={`${lexend.className} color text-center text-[34px] font-bold text-[#3366FF] md:w-[690px]`}
          >
            &quot;One Step Closer to More Effective and Connected
            Communication!&quot;
          </h1>
        </div>
        <div className="flex flex-row">
          <div>
            <Image
              src={hero_image_fifth}
              alt="hero_image_fifth"
              width={216}
              height={208}
              className="md:w-[253px]"
            />
          </div>
          <div className="md:w-[638px]">
            <div className="md:flex md:w-full md:flex-row">
              <ul className="mt-3 flex flex-col items-center gap-3 px-3 md:flex md:w-full md:flex-row">
                <li className="flex w-full items-center justify-center rounded-xl bg-[#3366FF] py-[10px] text-white md:text-sm">
                  Bisnis dan Pemasaran
                </li>
                <li className="flex w-full items-center justify-center rounded-xl bg-[#F3F5F8] py-[10px] text-[#3366FF] md:text-sm">
                  Komersial dan Penjualan
                </li>
                <li className="flex w-full items-center justify-center rounded-xl bg-[#F3F5F8] py-[10px] text-[#3366FF] md:text-sm">
                  Organisasi Sosial
                </li>
              </ul>
            </div>
            <p className="mt-7 font-medium">
              Bidang ini dapat memanfaatkan fitur broadcast untuk mengirim
              promosi, pengumuman, dan informasi produk kepada pelanggan dalam
              jumlah besar secara efisien. Sementara itu, fitur campaign dapat
              membantu merencanakan dan menyampaikan pesan iklan dengan waktu
              yang tepat kepada target audiens yang sesuai.
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default HeroSectionFifth;
