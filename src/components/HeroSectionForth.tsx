import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import hero_image_fourth from "public/images/hero_image_fourth.png";
import { lexend } from "./Fonts/Fonts";

const HeroSectionForth = () => {
  return (
    <section className="bg-[#ECF2FA] py-28 md:py-44">
      <Wrapper className="md:mx-auto md:flex md:max-w-5xl md:flex-row md:items-center md:justify-center md:gap-24">
        <div className="flex items-center justify-center">
          <Image
            src={hero_image_fourth}
            alt="hero_image_fourth"
            width={305}
            height={147}
            className="md:w-[463px]"
          />
        </div>
        <div className="md:w-[370px]">
          <h1 className={`${lexend.className} text-[34px] font-bold`}>
            Respond Faster with the Convenience of Auto Reply
          </h1>
          <p className="font-medium">
            Fowardin mempermudah Anda untuk memberikan respon cepat kepada pesan
            dari banyak kontak dan grup sekaligus. Dengan fitur Auto Reply kami,
            Anda dapat menjawab pertanyaan atau memberikan respon otomatis,
            menghemat waktu dan energi Anda. Tanggap lebih cepat dengan
            Fowardin.
          </p>
        </div>
      </Wrapper>
    </section>
  );
};

export default HeroSectionForth;
