import React from "react";
import Wrapper from "./Wrapper";
import hero_image_first from "/public/images/hero_image_first.png";
import Image from "next/image";
import { lexend } from "./Fonts/Fonts";
import arrow from "public/icons/arrow.svg";

const HeroSectionFirst = () => {
  return (
    <section className="bg-[#ECF2FA] py-28 md:py-52">
      <Wrapper className="gap-[112px] md:mx-auto md:flex md:max-w-5xl md:flex-row-reverse md:items-center md:justify-center">
        <div>
          <Image
            src={hero_image_first}
            alt="hero_image"
            className="md:w-[558px]"
          />
        </div>
        <div className="flex flex-col gap-[30px] md:w-[367px]">
          <h1 className={`${lexend.className} text-[24px] font-bold`}>
            Elevate Your Messaging Efficiency with Our Innovative Admin Tools
          </h1>
          <p className="text-sm font-medium">
            Selamat datang di Fowardit! Pengelolaan pesan Anda menjadi lebih
            mudah dengan Admin Tools kami. Penerusan pesan jadi lebih lancar
            melalui fitur otomatis, sehingga Anda dapat lebih fokus pada
            interaksi dengan pelanggan. Dapatkan kendali penuh atas pesan dan
            informasi dengan manajemen konten dan kontak yang praktis.
          </p>

          <div className="flex flex-row">
            <a
              href="/#"
              className="flex flex-row items-center gap-3 rounded-l-xl border-r-[1px] bg-black px-9 py-3 text-[#FAFBFF]"
            >
              Daftar Sekarang
            </a>
            <div className="flex flex-row items-center gap-3 rounded-r-xl bg-black px-4 py-3 text-[#FAFBFF]">
              <Image src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default HeroSectionFirst;
