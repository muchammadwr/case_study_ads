import React from "react";
import logo from "public/icons/logo.svg";
import Image from "next/image";
import { lexend } from "@/components/Fonts/Fonts";

const Login = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center px-9">
      <div className="mt-11 flex">
        <Image src={logo} alt="logo" />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-5">
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
          <a className="text-sm font-medium text-[#3366FF]">Lupa password?</a>
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
  );
};

export default Login;
