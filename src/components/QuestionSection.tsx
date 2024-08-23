import React from "react";
import Wrapper from "./Wrapper";
import { lexend } from "./Fonts/Fonts";
import search from "public/icons/search.svg";
import Image from "next/image";
import plus from "public/icons/plus.svg";

const QuestionSection = () => {
  return (
    <section className="bg-[#3366FF] py-20 md:py-44">
      <Wrapper className="flex flex-col items-center justify-center gap-10 md:mx-auto md:flex md:max-w-5xl md:flex-col md:items-center md:justify-center">
        <h1
          className={`${lexend.className} text-center text-[24px] font-bold text-[#FFFFFF]`}
        >
          Frequently Asked Questions
        </h1>
        <div className="flex max-w-[558px] flex-col items-center justify-center gap-9">
          <div className="flex w-full flex-row justify-between gap-3">
            <input type="text" className="h-9 w-full rounded md:w-full" />
            <Image src={search} alt="search" />
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="rounded bg-white p-3">
              <h1 className="flex justify-between text-base font-bold">
                What is FowardIt? <Image src={plus} alt="plus" />
              </h1>
            </div>
            <div className="flex flex-col gap-[9px] rounded bg-white p-[9px]">
              <h1 className="flex justify-between text-base font-bold">
                What is FowardIt? <Image src={plus} alt="plus" />
              </h1>
              <p>
                FowardIt is a powerful communication management tool that
                simplifies message forwarding, enhances contact management, and
                streamlines campaign scheduling for businesses of all sizes.
              </p>
            </div>
            <div className="rounded bg-white p-3">
              <h1 className="flex justify-between text-base font-bold">
                What is FowardIt? <Image src={plus} alt="plus" />
              </h1>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default QuestionSection;
