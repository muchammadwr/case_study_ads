import React from "react";
import logo from "public/icons/logo.svg";
import Image from "next/image";
import { lexend } from "@/components/Fonts/Fonts";
import Wrapper from "@/components/Wrapper";
import hero_image_first from "public/images/hero_image_first.png";

const Register = () => {
  return (
    <div className="bg-[#ECF2FA]">
      <Wrapper className="flex items-center justify-center gap-36 md:flex-row">
        <div className="hidden lg:block">
          <div className="flex w-[465px] flex-col">
            <Image src={hero_image_first} alt="hero_image_plus" />
            <div className="flex flex-col gap-4">
              <h1 className={`${lexend.className} text-2xl font-bold`}>
                Elevate Your Messaging Efficiency with Our Innovative Admin
                Tools
              </h1>
              <p className="text-sm font-medium">
                Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih
                mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan
                pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi
                lebih praktis dengan fitur sinkronasi Google Concact. Dapatkan
                kendali penuh pesan dengan manajemen konten yang praktis.
              </p>
            </div>
          </div>
        </div>
        <div className="flex h-screen flex-col items-center justify-center px-9">
          <div>
            <Image src={logo} alt="logo" className="lg:hidden" />
          </div>
          <div className="flex flex-col items-center justify-center gap-[30px]">
            <div className="flex flex-col items-center justify-center">
              <h1 className={`${lexend.className} text-2xl font-bold`}>
                Welcome to Forwadin
              </h1>
              <p className="text-center text-sm font-medium">
                Revolutionize your communication journey with FowardIt today
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Username / Email"
                className="h-12 w-full rounded border-2 pl-5 text-sm font-medium text-[#B0B4C5]"
              />
              <input
                type="number"
                placeholder="WhatsApp Phone Number"
                className="h-12 w-full rounded border-2 pl-5 text-sm font-medium text-[#B0B4C5]"
              />
              <input
                type="password"
                placeholder="Password"
                className="h-12 w-full rounded border-2 pl-5 text-sm font-medium text-[#B0B4C5]"
              />
              <div className="bg-[#F3F5F8] px-5 py-3 text-sm font-medium text-[#777C88]">
                Password harus mengandung: <br />
                <span className="text-[#4FBEAB]">
                  &#10003; Paling tidak 8 karakter
                </span>
                <br />
                Paling tidak 3 dari syarat berikut: <br />{" "}
                <span className="text-[#4FBEAB]">
                  &#10003; Huruf kecil (a-z){" "}
                </span>
                <br />
                Huruf besar (A-Z) <br /> Angka Karakter Spesial (!@#$%^&*)
              </div>
            </div>
            <button className="h-12 w-full rounded border-2 bg-[#3366FF] text-sm font-medium text-white">
              Sign Up
            </button>
            <p className="text-sm font-medium">
              Sudah Punya Akun?{" "}
              <a href="#" className="text-sm font-medium text-[#3366FF]">
                Masuk di sini
              </a>
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Register;
