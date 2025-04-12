"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { hpModels } from "@/data/hpModels";
import Image from "next/image";

const HpSearchPage = () => {
  const [query, setQuery] = useState("");
  const [isModelSelected, setIsModelSelected] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const images = [
    "/img/hp-images/NSLaser.avif",
    "/img/hp-images/Envy.avif",
    "/img/hp-images/Deskjet.avif",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (isModelSelected && query.trim() !== "") {
      router.push(`/printer/hp/${query.toLowerCase().replace(/\s+/g, "-")}`);
      setQuery("");
      setIsModelSelected(false);
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
              Let&apos;s connect your printer to a Wi-Fi or wired network or to
              a computer using a USB cable, but first, we need to know your
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
                      className="form-radio text-blue-400"
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
                  {/* Autocomplete Suggestions */}
                  {query.length > 0 && !isModelSelected && (
                    <div className="absolute w-full bottom-full mb-2 bg-white rounded shadow max-h-60 overflow-y-auto z-20">
                      {hpModels
                        .filter((model) =>
                          model.toLowerCase().includes(query.toLowerCase())
                        )
                        .map((model, index) => (
                          <p
                            key={index}
                            onClick={() => {
                              setQuery(model);
                              setIsModelSelected(true);
                            }}
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
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setIsModelSelected(false);
                    }}
                    placeholder="Example: HP DeskJet 2632 All-in-One printer"
                    className="w-full border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none mb-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!isModelSelected}
                  className={`w-1/2 ${
                    isModelSelected
                      ? "bg-blue-400 hover:bg-blue-600"
                      : "bg-gray-300 cursor-not-allowed"
                  } text-white py-3 rounded text-lg transition-all mt-4`}
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Carousel Section */}
            <div className="w-full lg:w-5/12 h-[250px] md:h-[300px] relative">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentSlide
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Slide ${index}`}
                    fill
                    className="object-contain"
                    priority={index === currentSlide}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HpSearchPage;
