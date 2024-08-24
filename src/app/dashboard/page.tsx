import React from "react";
import user from "public/icons/user.svg";
import notification from "public/icons/notification.svg";
import setting from "public/icons/setting.svg";
import Image from "next/image";
import { lexend } from "@/components/Fonts/Fonts";
import line_merah from "public/icons/line_merah.svg";
import line_hijau from "public/icons/line_hijau.svg";
import ia from "public/icons/ia.svg";
import down from "public/icons/down.svg";
import piechart from "public/icons/piechart.svg";
import chartline from "public/images/chartline.png";
import chartlinesecond from "public/images/chartlinesecond.png";
import calendar from "public/icons/calendar.svg";

const Profile = () => {
  return (
    <div className="flex w-72 flex-row items-center justify-center gap-4">
      <div>
        <Image src={notification} alt="notification" />
      </div>
      <div className="flex flex-row items-center justify-center gap-4 rounded-full bg-white px-4">
        <p>Alif Rizki</p>
        <Image
          src={user}
          alt="user"
          className="w-[33px] rounded-full bg-[#3366FF]"
        />
      </div>
      <div>
        <Image src={setting} alt="setting" />
      </div>
    </div>
  );
};

const Starter = () => {
  return (
    <div className="flex flex-row gap-5">
      <div>
        <p className="text-xs font-medium">
          Paket <br /> saat ini
        </p>
      </div>
      <div className="flex flex-row items-center justify-center gap-2">
        <h1 className={`${lexend.className} text-2xl font-bold`}>Starter</h1>
        <div className="h-4 w-8 rounded-md bg-black">
          <p className="text-center text-[10px] font-normal text-white">Free</p>
        </div>
      </div>
    </div>
  );
};

const Line = () => {
  return (
    <div className="w-80">
      <div className="flex flex-row">
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-[22px]">
            <div>
              <h1 className="text-xs font-medium">Devices</h1>
            </div>
            <div>
              <Image src={line_merah} alt="line_merah" />
              <p className="text-[10px] font-normal text-[#777C88]">
                8 dari 10 device yang tersedia
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-[22px]">
            <div>
              <h1 className="text-xs font-medium">Contacts</h1>
            </div>
            <div>
              <Image src={line_hijau} alt="line_hijau" />
              <p className="text-[10px] font-normal text-[#777C88]">
                8 dari 10 device yang tersedia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UpgradePaket = () => {
  return (
    <div className="flex flex-1 flex-col items-end gap-6">
      <div>
        <p className="text-right text-[10px] font-medium text-[#777C88]">
          Aktif sampai dengan
        </p>
        <p className="text-xs font-medium">Selasa, 29 Agustus 2023</p>
      </div>
      <div className="text-right text-xs font-medium">
        <p>
          Upgrade paket untuk meningkatkan <br /> batasan fitur yang ada
        </p>
      </div>
      <div>
        <a
          href="#"
          className="rounded-lg border-[1px] border-[#3366FF] px-[52.5px] py-[7.5px] text-[#3366FF]"
        >
          Upgrade Paket
        </a>
      </div>
    </div>
  );
};

const StarterWrap = () => {
  return (
    <div className="flex flex-col items-center rounded-md bg-white px-8 pb-[10px] pt-7">
      <div className="flex w-[719px] flex-row">
        <div className="flex flex-col gap-10">
          <Starter />
          <Line />
        </div>
        <UpgradePaket />
      </div>
      <p className="text-sm font-medium text-[#B0B4C5]">
        Tampilkan kapasitas fitur lainnya
      </p>
    </div>
  );
};

const PesanTerakhir = () => {
  return (
    <div className="flex w-[373px] flex-col gap-[8px] rounded-md bg-white px-4 py-3">
      <div>
        <h1 className="text-base font-bold">Pesan Terakhir</h1>
      </div>
      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex flex-row gap-[10px]">
          <div className="flex">
            <Image
              src={user}
              alt="user"
              className="w-[33px] rounded-full bg-[#3366FF]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[10px] font-bold">Anda</p>
            <p className="text-[10px] font-normal">
              Hai apa kabarmu hari ini? Semoga...
            </p>
          </div>
        </div>
        <div className="h-4 w-[51px] rounded-md bg-[#3366FF] text-center text-[10px] font-normal text-white">
          Terkirim
        </div>
      </div>
      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex flex-row gap-[10px]">
          <div>
            <Image
              src={ia}
              alt="ia"
              className="w-[33px] rounded-full bg-[#3366FF]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[10px] font-bold">Ihsanul Afkar</p>
            <p className="text-[10px] font-normal">
              Hai apa kabarmu hari ini? Semoga...
            </p>
          </div>
        </div>
        <div className="h-4 w-[51px] rounded-md bg-[#4FBEAB] text-center text-[10px] font-normal text-white">
          Diterima
        </div>
      </div>
      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex flex-row gap-[10px]">
          <div>
            <Image
              src={user}
              alt="user"
              className="w-[33px] rounded-full bg-[#3366FF]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[10px] font-bold">Anda</p>
            <p className="text-[10px] font-normal">
              Hai apa kabarmu hari ini? Semoga...
            </p>
          </div>
        </div>
        <div className="h-4 w-[51px] rounded-md bg-[#3366FF] text-center text-[10px] font-normal text-white">
          Terkirim
        </div>
      </div>
      <div className="text-center text-sm font-medium text-[#3366FF]">
        Tampilkan Lainnya
      </div>
    </div>
  );
};

const Ringkasan = () => {
  return (
    <div className="flex w-[348px] flex-col gap-4 rounded-md bg-white px-7 py-6">
      <h1 className="text-base font-bold">Ringkasan hari ini</h1>
      <div className="flex w-full flex-row gap-4">
        <div className="flex w-full flex-row justify-between rounded bg-[#F3F5F8] p-3">
          <div>
            <p className="text-[10px] font-normal">Device</p>
            <h1 className="text-sm font-semibold">RMX3263</h1>
          </div>
          <Image src={down} alt="down" />
        </div>
        <div className="rounded bg-[#F3F5F8] p-3">
          <h1 className="text-[10px] font-normal">Aktif Sejak</h1>
          <h1 className="text-sm font-semibold">29.8.2023</h1>
        </div>
      </div>
      <Pesan />
    </div>
  );
};

const Pesan = () => {
  return (
    <div className="flex flex-row gap-9">
      <div>
        <p className="text-[10px] font-normal">Pesan Keluar</p>
        <p className="text-sm font-semibold">24</p>
      </div>
      <div>
        <p className="text-[10px] font-normal">Pesan Masuk</p>
        <p className="text-sm font-semibold">7</p>
      </div>
      <div>
        <p className="text-[10px] font-normal">Pesan Gagal</p>
        <p className="text-sm font-semibold">0</p>
      </div>
    </div>
  );
};

const StatistikPesan = () => {
  return (
    <div className="flex w-full flex-row justify-between rounded bg-white p-6">
      <div>
        <div>
          <h1 className="text-base font-bold">Total Statistik Pesan</h1>
        </div>
        <div>
          <Pesan />
        </div>
      </div>
      <div>
        <Image src={piechart} alt="piechart" />
      </div>
    </div>
  );
};

const Analitik = () => {
  return (
    <div className="flex flex-row gap-4">
      <Ringkasan />
      <StatistikPesan />
    </div>
  );
};

const ChartLine = () => {
  return (
    <div className="flex w-full flex-col gap-9 bg-white p-10">
      <div className="flex flex-row gap-[14px]">
        <div className="w-[102px] rounded bg-[#F3F5F8] p-3">
          <h1 className="text-[10px] font-normal">Hari ini</h1>
          <p className="text-sm font-semibold">7</p>
        </div>
        <div className="w-[102px] rounded bg-[#F3F5F8] p-3">
          <h1 className="text-[10px] font-normal">Rata-rata harian</h1>
          <p className="text-sm font-semibold">7</p>
        </div>
        <div className="w-[102px] rounded bg-[#F3F5F8] p-3">
          <h1 className="text-[10px] font-normal">Bulan Ini</h1>
          <p className="text-sm font-semibold">23</p>
        </div>
        <div className="w-[102px] rounded bg-[#F3F5F8] p-3">
          <h1 className="text-[10px] font-normal">Rata-rata waktu</h1>
          <p className="text-sm font-semibold">00:02:42</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-[14px] font-semibold">Grafik chart perjam</h1>
        <Image src={chartline} alt="chartline" />
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-[14px] font-semibold">Trend Interaksi Pesan</h1>
        <Image src={chartlinesecond} alt="chartlinesecond" />
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <section className="flex justify-end p-5">
      <div className="bg-[#F3F5F8]">
        <div className="pt-6">
          <div className="flex justify-end">
            <Profile />
          </div>
          <div className="flex justify-between p-5">
            <h1 className="text-2xl font-bold">Selamat siang, Alif</h1>
            <div className="flex flex-row gap-3">
              <div>
                <h1 className="text-xs font-medium text-[#B0B4C5]">
                  Tanggal hari ini
                </h1>
                <h1 className="text-xs font-medium text-[#777C88]">
                  Selasa, 29 Agustus 2023
                </h1>
              </div>
              <Image src={calendar} alt="calendar" />
            </div>
          </div>
          <div className="flex w-full flex-row justify-end gap-4 p-5">
            <StarterWrap />
            <PesanTerakhir />
          </div>
        </div>
        <div className="flex w-full flex-col justify-end gap-4 p-5">
          <h1 className="text-2xl font-bold">Analitik</h1>
          <Analitik />
        </div>
        <div className="p-5">
          <ChartLine />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
