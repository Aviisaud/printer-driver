import React, { useState } from "react";
import Image from "next/image"; // if you're using next/image for optimization (optional)

const HpPrinterModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [connectionMethod, setConnectionMethod] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const carouselImages = ["/img/printer1.webp", "/img/printer2.webp", "/img/printer3.webp"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  const prevImage = () =>
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2 className="text-2xl font-bold mb-4">HP Printer Setup</h2>
            <p className="mb-4">Follow the instructions to set up your HP printer.</p>
            <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={onClose}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
              >
                Back
              </button>
              <button
                onClick={() => setStep(2)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Start Setup
              </button>
            </div>
          </>
        );

      case 2:
        return (
          <>
            <h2 className="text-2xl font-bold mb-4">Find Your Printer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Search section */}
              <div>
                <input
                  type="text"
                  placeholder="Search printer model..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border px-4 py-2 w-full rounded mb-4"
                />
                <p className="text-sm text-gray-600">You searched for: {searchQuery}</p>
              </div>

              {/* Image carousel */}
              <div className="flex flex-col items-center">
                <img
                  src={carouselImages[currentImageIndex]}
                  alt="Printer"
                  className="w-full h-48 object-contain mb-4"
                />
                <div className="flex gap-4">
                  <button
                    onClick={prevImage}
                    className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                  >
                    ◀
                  </button>
                  <button
                    onClick={nextImage}
                    className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
                  >
                    ▶
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={() => setStep(1)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Continue
              </button>
            </div>
          </>
        );

      case 3:
        return (
          <>
            <h2 className="text-2xl font-bold mb-4">Select Connection Method</h2>
            <div className="flex flex-col items-start gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="USB"
                  checked={connectionMethod === "USB"}
                  onChange={(e) => setConnectionMethod(e.target.value)}
                />
                USB
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="WiFi"
                  checked={connectionMethod === "WiFi"}
                  onChange={(e) => setConnectionMethod(e.target.value)}
                />
                Wi-Fi
              </label>
            </div>
            <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={() => setStep(2)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
              >
                Back
              </button>
              <button
                onClick={() => setStep(4)}
                disabled={!connectionMethod}
                className={`${
                  connectionMethod ? "bg-blue-500 hover:bg-blue-600" : "bg-blue-300 cursor-not-allowed"
                } text-white px-4 py-2 rounded`}
              >
                Continue
              </button>
            </div>
          </>
        );

      case 4:
        return (
          <>
            <h2 className="text-2xl font-bold mb-4">
              {connectionMethod} Setup Instructions
            </h2>
            {connectionMethod === "USB" ? (
              <div className="text-left space-y-2">
                <p>1. Connect your printer to your computer via the USB cable.</p>
                <p>2. Make sure the printer is powered on.</p>
                <p>3. Wait for the device to be detected and follow any on-screen instructions.</p>
              </div>
            ) : (
              <div className="text-left space-y-2">
                <p>1. Make sure your printer is powered on and in Wi-Fi setup mode.</p>
                <p>2. Connect to the printer’s Wi-Fi from your device’s Wi-Fi settings.</p>
                <p>3. Open the printer setup software and follow the instructions to connect to your home network.</p>
              </div>
            )}
            <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={() => setStep(3)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
              >
                Back
              </button>
              <button
                onClick={() => {
                  alert("Setup Complete!");
                  onClose();
                  setStep(1);
                  setConnectionMethod("");
                  setSearchQuery("");
                }}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
              >
                Finish Setup
              </button>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full text-black text-center">
        {renderStepContent()}
      </div>
    </div>
  );
};

export default HpPrinterModal;
