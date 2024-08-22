import React from "react";
import Wrapper from "./Layouts/Wrapper";
import { lexend } from "./Fonts/Fonts";

const Pricing = () => {
  return (
    <section>
      <Wrapper>
        <div>
          <h1 className={`${lexend.className} text-[34px] font-bold`}>
            Our Pricing
          </h1>
        </div>
      </Wrapper>
    </section>
  );
};

export default Pricing;
