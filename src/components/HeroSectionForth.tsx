import React from "react";
import Wrapper from "./Layouts/Wrapper";
import Image from "next/image";
import hero_image_fourth from "public/images/hero_image_fourth.png";
import { lexend } from "./Fonts/Fonts";

const HeroSectionForth = () => {
  return (
    <section>
      <Wrapper>
        <div>
          <Image
            src={hero_image_fourth}
            alt="hero_image_fourth"
            width={305}
            height={147}
          />
        </div>
        <h1 className={`${lexend.className} text-[34px] font-bold`}>
          Respond Faster with the Convenience of Auto Reply
        </h1>
        <p className="font-medium">
          Fowardin mempermudah Anda untuk memberikan respon cepat kepada pesan
          dari banyak kontak dan grup sekaligus. Dengan fitur Auto Reply kami,
          Anda dapat menjawab pertanyaan atau memberikan respon otomatis,
          menghemat waktu dan energi Anda. Tanggap lebih cepat dengan Fowardin.
        </p>
      </Wrapper>
    </section>
  );
};

export default HeroSectionForth;
