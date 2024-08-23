import Image from "next/image";
import React from "react";
import logo from "public/icons/logo.svg";
import hamburger from "public/icons/hamburger.svg";

const Header = () => {
  return (
    <header className="flex flex-row justify-between px-10 py-8">
      <div>
        {/* Logo */}
        <Image src={logo} alt="logo" />
      </div>

      {/* Hambuger */}
      <div>
        <Image src={hamburger} alt="hamburger" />
      </div>
    </header>
  );
};

export default Header;
