"use client"
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter();

    const handleBrandClick = (brand) => {
        router.push(`/printer/${brand}`);
    };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mt-8 md:mt-0 px-4 ">
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4 leading-tight mt-16">
          Select Your Printer Brand
        </h1>
        <p className="text-gray-600 text-md sm:text-lg mt-2">
          Choose your printer brand from the options below to proceed with setup
          instructions and driver installation.
        </p>
      </div>

      {/* Full-width Image Grid */}
      <div className="z-10 max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 px-4">
        {[
          { name: "hp", image: "/img/hp.webp" },
          { name: "canon", image: "/img/canon.webp" },
          { name: "brother", image: "/img/brother.webp" },
          { name: "epson", image: "/img/epson.webp" },
        ].map((printer) => (
          <div
            key={printer.name}
            className="overflow-hidden rounded-lg shadow-lg"
            onClick={() => handleBrandClick(printer.name)}
          >
            <img
              src={printer.image}
              alt={printer.name}
              className="w-full object-contain transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          </div>
        ))}
      </div>

      {/* Instructional text below grid */}
      <div className="text-center mt-12 mb-16 px-4">
        <p className="text-gray-700 text-base sm:text-lg">
          After selecting your printer brand, you will be guided through finding
          your exact printer model, downloading drivers, and completing the
          setup process.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Please make sure your printer is powered on and connected to your
          network or computer for best results.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          If not connected, don't worry — our driver updater will guide you step
          by step.
        </p>
      </div>
    </div>
  );
};

export default page;
