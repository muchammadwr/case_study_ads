import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import hero_image_third from "public/images/hero_image_third.png";
import { lexend } from "./Fonts/Fonts";

const HeroSectionThird = () => {
  return (
    <section className="py-[107px] md:py-[240px]">
      <Wrapper className="md:mx-auto md:flex md:max-w-5xl md:flex-row-reverse md:items-center md:justify-center">
        <div>
          <Image
            src={hero_image_third}
            alt="hero_image_third"
            width={303}
            height={186}
            className="md:w-[461px]"
          />
        </div>
        <div className="flex flex-col gap-[30px] md:w-[367px]">
          <h1 className={`${lexend.className} text-[36px] font-bold`}>
            Right Time, Effective Messages
          </h1>
          <p className="font-medium">
            Fowardin memungkinkan Anda untuk merencanakan pengiriman iklan yang
            tepat sasaran. Manfaatkan fitur Campaign kami untuk mengoptimalkan
            pesan iklan Anda sehingga hasilnya lebih akurat dan sukses. Dengan
            Fowardin, setiap pesan iklan memiliki dampak yang lebih besar.
          </p>
        </div>
      </Wrapper>
    </section>
  );
};

export default HeroSectionThird;
