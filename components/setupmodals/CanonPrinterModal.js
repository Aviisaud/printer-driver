import React from "react";

const CanonPrinterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full text-black text-center">
        <h2 className="text-2xl font-bold mb-4">Canon Printer Setup</h2>
        <p className="mb-4">Follow the instructions to set up your Canon printer.</p>

        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
          >
            Back
          </button>
          <button
            onClick={() => alert("Canon setup complete!")}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Finish Setup
          </button>
        </div>
      </div>
    </div>
  );
};

export default CanonPrinterModal;
