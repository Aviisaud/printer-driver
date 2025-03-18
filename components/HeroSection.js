import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Install & Update Printer Drivers with <br />
            All-in-One Printer Driver Updater
          </h1>
          <p className="text-lg mt-4 mb-8">
            Download, install, and automatically update printer drivers for
            every major brand. <br />
            Compatible with Windows 11, 10, 8, and 7.
          </p>
          <a
            href="#download"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded shadow-lg transition"
          >
            Download Now
          </a>
        </div>
        <div className="flex justify-end">
          <Image
            src="/img/hero-image-new.webp"
            alt="Printer driver updater banner"
            width={500}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
