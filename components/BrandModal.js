import React, { useState } from "react";
import HpPrinterModal from "@/components/setupmodals/HPPrinterModal";
import CanonPrinterModal from "@/components/setupmodals/CanonPrinterModal";
import BrotherPrinterModal from "@/components/setupmodals/BrotherPrinterModal";
import EpsonPrinterModal from "@/components/setupmodals/EpsonPrinterModal";

const BrandModal = ({ isOpen, onClose }) => {
  const [selectedBrand, setSelectedBrand] = useState(null);

  const handlePrinterClick = (printerName) => {
    setSelectedBrand(printerName);
  };

  const handleBackToBrandSelection = () => {
    setSelectedBrand(null);
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 ${
          isOpen && !selectedBrand ? "block" : "hidden"
        }`}
      >
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full text-black text-center">
          <h2 className="text-3xl font-bold mb-4">Select Your Printer Model</h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8 px-4">
            {[{ name: "HP", image: "/img/hp.webp" },
              { name: "Canon", image: "/img/canon.webp" },
              { name: "Brother", image: "/img/brother.webp" },
              { name: "Epson", image: "/img/epson.webp" },
            ].map((printer) => (
              <div
                key={printer.name}
                style={{ cursor: "pointer" }}
                className="rounded-lg shadow-md p-2 bg-gray-100 group"
                onClick={() => handlePrinterClick(printer.name)}
              >
                <img
                  src={printer.image}
                  alt={printer.name}
                  style={{ transition: "transform 0.3s" }}
                  className="w-full h-20 object-contain"
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Setup modals for each brand with back option */}
      <HpPrinterModal
        isOpen={selectedBrand === "HP"}
        onClose={handleBackToBrandSelection}
      />
      <CanonPrinterModal
        isOpen={selectedBrand === "Canon"}
        onClose={handleBackToBrandSelection}
      />
      <BrotherPrinterModal
        isOpen={selectedBrand === "Brother"}
        onClose={handleBackToBrandSelection}
      />
      <EpsonPrinterModal
        isOpen={selectedBrand === "Epson"}
        onClose={handleBackToBrandSelection}
      />
    </>
  );
};

export default BrandModal;
