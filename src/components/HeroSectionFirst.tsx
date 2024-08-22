import React from "react";
import Wrapper from "./Layouts/Wrapper";
import hero_image_first from "/public/images/hero_image_first.png";
import Image from "next/image";
import { lexend } from "./Fonts/Fonts";

const HeroSectionFirst = () => {
  return (
    <section className="bg-[#ECF2FA]">
      <Wrapper>
        <div>
          <Image src={hero_image_first} alt="hero_image" />
        </div>
        <div className="flex flex-col gap-[30px]">
          <h1 className={`${lexend.className} text-[34px] font-bold`}>
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
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.70437 10.1219L4.80948 9.23699L7.91673 6.12975H0.111328V4.83714H7.91673L4.80948 1.73486L5.70437 0.844948L10.3429 5.48344L5.70437 10.1219Z"
                  fill="#FAFBFF"
                />
              </svg>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default HeroSectionFirst;
