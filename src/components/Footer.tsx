import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import logoPutih from "public/icons/logoPutih.svg";
import logoFooter from "public/icons/logoFooter.svg";

const Footer = () => {
  return (
    <footer className="bg-[#3366FF] py-[107px] md:py-[240px]">
      <Wrapper className="flex flex-col md:mx-auto md:flex md:max-w-5xl md:flex-col md:items-center md:justify-center">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="flex flex-col gap-12">
            <Image src={logoPutih} alt="logo" />
            <p className="text-xs font-medium text-white md:w-64">
              Fowardin is your ultimate communication management solution. We
              empower businesses of all sizes with efficient message forwarding,
              streamlined contact management, and powerful campaign scheduling.
              Our mission is to simplify your communication processes, helping
              you engage with your audience effectively and effortlessly. Join
              us in transforming your communication game today!
            </p>
          </div>
          <div className="flex flex-col gap-5 md:w-64">
            <h1 className="text-base font-bold text-white">Contact Us</h1>
            <p className="text-xs text-white">
              Join our mailing list to receive updates, exclusive content, and
              early access to upcoming events. By signing up, you become an
              integral part of our community, spreading the message of
              compassion and making a difference.
            </p>
            <p className="text-xs text-white">
              Email: info@fowarin <br />
              Phone: +1 (123) 456-7890
            </p>
          </div>
          <div className="flex flex-col gap-5 md:w-40">
            <h1 className="text-base font-bold text-white">Lets Talk</h1>
            <p className="text-xs text-white">
              Facebook <br /> Instagram <br /> Twitter
            </p>
          </div>
        </div>
        <div className="mt-52 flex flex-row items-center justify-center gap-3">
          <p className="text-sm font-light text-white">Porwered By</p>
          <Image src={logoFooter} alt="logo footer" />
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
