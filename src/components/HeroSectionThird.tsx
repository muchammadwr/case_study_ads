import React from "react";
import Wrapper from "./Layouts/Wrapper";
import Image from "next/image";
import hero_image_third from "public/images/hero_image_third.png";
import { lexend } from "./Fonts/Fonts";

const HeroSectionThird = () => {
  return (
    <section>
      <Wrapper>
        <div>
          <Image
            src={hero_image_third}
            alt="hero_image_third"
            width={303}
            height={186}
          />
        </div>
        <h1 className={`${lexend.className} text-[36px] font-bold`}>
          Right Time, Effective Messages
        </h1>
        <p className="font-medium">
          Fowardin memungkinkan Anda untuk merencanakan pengiriman iklan yang
          tepat sasaran. Manfaatkan fitur Campaign kami untuk mengoptimalkan
          pesan iklan Anda sehingga hasilnya lebih akurat dan sukses. Dengan
          Fowardin, setiap pesan iklan memiliki dampak yang lebih besar.
        </p>
      </Wrapper>
    </section>
  );
};

export default HeroSectionThird;
