import { inter, lexend } from "@/components/Fonts/Fonts";
import React from "react";
import logo from "public/icons/logo.svg";
import Image from "next/image";
import Wrapper from "@/components/Wrapper";
import hero_image_first from "public/images/hero_image_first.png";

const Login = () => {
  return (
    <div className="bg-[#ECF2FA]">
      <Wrapper className="flex flex-col items-center justify-center gap-36 md:flex-row">
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
        <div className="h-screen px-5 md:w-[465px]">
          <div className="flex items-center justify-center">
            <Image src={logo} alt="logo" className="lg:hidden" />
          </div>
          <div className="mt-40 flex w-full flex-col items-center justify-center gap-5">
            <div className="flex flex-col items-center justify-center">
              <h1 className={`${lexend.className} text-2xl font-bold`}>
                Welcome Back
              </h1>
              <p className="text-sm font-medium">
                We&apos;re so excited to see you again!
              </p>
            </div>
            <div className="flex w-full flex-col gap-4">
              <input
                type="text"
                placeholder="Username/Email"
                className="h-12 w-full rounded border-2 pl-5 text-sm font-medium text-[#B0B4C5]"
              />
              <input
                type="password"
                placeholder="Password"
                className="h-12 w-full rounded border-2 pl-5 text-sm font-medium text-[#B0B4C5]"
              />
              <a className="text-sm font-medium text-[#3366FF]">
                Lupa password?
              </a>
            </div>
            <button className="h-12 w-full rounded bg-[#3366FF] text-sm font-medium text-white">
              Sign In
            </button>
            <p className="text-sm font-medium">
              Butuh buat akun?{" "}
              <a href="#" className="text-sm font-medium text-[#3366FF]">
                {" "}
                Daftar di sini
              </a>
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Login;
