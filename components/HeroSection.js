"use client";
import React, { useState } from "react";
import Image from "next/image";
import DownloadModal from "@/components/DownloadModal";

const HeroSection = () => {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);


  const handleDownloadComplete = () => {
    setIsSuccessModalOpen(true);
  };

  return (
    <section className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Install & Update Printer Drivers with
            All-in-One Printer Driver Updater
          </h1>
          <p className="mt-4 mb-8">
            Download, install, and automatically update printer drivers for
            every major brand. <br />
            Compatible with Windows 11, 10, 8, and 7.
          </p>
          <button
            onClick={() => setIsDownloadModalOpen(true)}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded shadow-lg transition"
          >
            Download Now
          </button>

          {/* Trust badges */}
          <div className="mt-8">
            <div className="flex flex-nowrap overflow-x-auto gap-4 md:flex-wrap md:overflow-visible">
              {[
                { src: "/img/AppEsteem_Seal_Logo.png", alt: "AppEsteem Seal" },
                { src: "/img/seal-digicert.png", alt: "DigiCert Seal" },
                { src: "/img/trustpilot.jpg", alt: "TrustPilot" },
              ].map((badge, index) => (
                <div
                  key={index}
                  className="bg-white p-3 rounded-lg shadow-md flex items-center min-w-[100px]"
                >
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    width={100}
                    height={60}
                    className="h-15 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
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

      {/* Download modal */}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
        onComplete={handleDownloadComplete}
      />
    </section>
  );
};

export default HeroSection;
