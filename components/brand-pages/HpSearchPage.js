"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { hpModels } from "@/data/hpModels";
import Image from "next/image";

const HpSearchPage = () => {
  const [query, setQuery] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const images = [
    "https://support.hp.com/wcc-assets/content/dam/hp-wcc/headless-assets/images/p-finder/NSLaser.png",
    "https://support.hp.com/wcc-assets/content/dam/hp-wcc/headless-assets/images/p-finder/Envy.png",
    "https://support.hp.com/wcc-assets/content/dam/hp-wcc/headless-assets/images/p-finder/Deskjet.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      router.push(`/printer/hp/${query.toLowerCase().replace(/\s+/g, "-")}`);
      setQuery("");
    }
  };

  return (
    <>
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center md:text-left md:items-start gap-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              We&apos;re here to help you set up your HP printer
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Let&apos;s connect your printer to a Wi-Fi or wired network or to a
              computer using a USB cable, but first, we need to know your
              printer model.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Form Section */}
            <div className="w-full lg:w-7/12 bg-white p-6 rounded shadow">
              <form onSubmit={handleSearch}>
                <div className="mb-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="printerOption"
                      className="form-radio text-blue-400 "
                    />
                    <span className="text-gray-700 font-medium">
                      Unpack, Setup New Printer
                    </span>
                  </label>
                </div>
                <div className="mb-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="printerOption"
                      className="form-radio text-blue-400"
                    />
                    <span className="text-gray-700 font-medium">
                      Troubleshoot printer issues
                    </span>
                  </label>
                </div>
                <p className="mt-3 mb-2 text-gray-700">
                  Enter your serial number, product number or product name
                </p>

                <div className="relative">
                  {/* Autocomplete Suggestions Above Input */}
                  {query.length > 0 && (
                    <div className="absolute w-full bottom-full mb-2 bg-white rounded shadow max-h-55 overflow-y-auto z-20">
                      {hpModels
                        .filter((model) =>
                          model.toLowerCase().includes(query.toLowerCase())
                        )
                        .map((model, index) => (
                          <p
                            key={index}
                            onClick={() => setQuery(model)}
                            className="cursor-pointer hover:bg-gray-100 px-4 py-2"
                          >
                            {model}
                          </p>
                        ))}
                    </div>
                  )}

                  <input
                    type="text"
                    name="query"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Example: HP DeskJet 2632 All-in-One printer"
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none mb-1"
                  />
                </div>

                <button
                  type="submit"
                  className="w-1/2 bg-blue-400 hover:bg-blue-600 text-white py-3 rounded text-lg transition-all mt-4 cursor-pointer"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Carousel Section */}
            <div className="w-full lg:w-5/12 relative overflow-hidden h-[250px] md:h-[300px]">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`w-full h-full relative transition-opacity duration-700 ${
                    index === currentSlide
                      ? "opacity-100"
                      : "opacity-0 absolute inset-0"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Slide ${index}`}
                    layout="fill"
                    objectFit="contain"
                    priority={index === currentSlide}
                  />
                </div>
              ))}

              {/* Carousel dots */}
              <div className="flex justify-center mt-4 gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 w-2 rounded-full ${
                      index === currentSlide ? "bg-blue-600" : "bg-gray-400"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HpSearchPage;
