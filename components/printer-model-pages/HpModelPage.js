"use client";
import { useParams } from "next/navigation";
import React from "react";

const HpModelPage = () => {
  const { model } = useParams();

  const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const decodedModel = capitalizeWords(
    decodeURIComponent(model).replaceAll("-", " ")
  );

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        HP Printer Setup for {decodedModel}
      </h1>
      <p className="text-gray-700 mb-6">
        Follow these simple steps to complete your printer setup and driver
        installation.
      </p>

      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Download Driver</h2>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 inline-block mt-2"
        >
          Download Now
        </a>
      </div>

      <div className="bg-white border p-6 rounded-lg shadow-sm mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Choose How to Connect
        </h2>
        <p>Select from the following options:</p>
        <ul className="list-disc list-inside mb-4">
          <li>USB Connection</li>
          <li>Wi-Fi Setup</li>
        </ul>
        <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
          Start Guided Setup
        </button>
      </div>
    </div>
  );
};

export default HpModelPage;
