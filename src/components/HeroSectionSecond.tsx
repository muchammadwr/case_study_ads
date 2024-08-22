import React from "react";
import Wrapper from "./Layouts/Wrapper";
import Image from "next/image";
import hero_image_second from "public/images/hero_image_second.png";
import { lexend } from "./Fonts/Fonts";

const HeroSectionSecond = () => {
  return (
    <section className="bg-[#ECF2FA]">
      <Wrapper>
        <div>
          <Image
            src={hero_image_second}
            alt="hero_image"
            width={305}
            height={147}
          />
        </div>
        <div className="flex flex-col gap-[30px]">
          <h1 className={`${lexend.className} text-[34px] font-bold`}>
            Reach Further with Ease
          </h1>
          <p className="font-medium">
            Fowardin memberikan Anda akses cepat untuk memperluas jangkauan
            komunikasi Anda. Dengan fitur Broadcast kami, Anda dapat mengirim
            pesan kepada banyak kontak dan grup sekaligus. Menjangkau audiens
            Anda tidak pernah semudah ini.
          </p>
        </div>
      </Wrapper>
    </section>
  );
};

export default HeroSectionSecond;
