"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-100 text-gray-800">
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
          <div className="flex justify-center">
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

      {/* Why You Need This */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">
            Why You Need a Printer Driver Updater
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Outdated or missing printer drivers can cause printing errors,
            connection issues, and slow performance. Our tool ensures you get
            the right driver — quickly, safely, and automatically.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10 text-slate-800">
            👉 3 Easy Steps to Update Your Printer Drivers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              "Download & install All-in-One Printer Driver Updater",
              "Scan your system for outdated or missing printer drivers",
              "Install the latest official drivers with a single click",
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded shadow">
                <h3 className="text-xl font-semibold mb-4">Step {index + 1}</h3>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Brands */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">
            ✅ Supported Printer Brands
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-600 text-lg font-medium">
            {[
              "HP",
              "Canon",
              "Epson",
              "Brother",
              "Lexmark",
              "Samsung",
              "Kyocera",
              "Xerox",
              "Dell",
              "Ricoh",
              "Sharp",
              "Konica Minolta",
              "Panasonic",
              "OKI",
              "Toshiba",
            ].map((brand, index) => (
              <span key={index} className="py-2">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10 text-slate-800">
            ✅ Key Features
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-lg">
            {[
              "Automatic printer driver scanning and installation",
              "Database of over 1 million drivers",
              "Verified & official drivers only",
              "Regular driver database updates",
              "Backup & restore options to roll back drivers if needed",
            ].map((feature, index) => (
              <li
                key={index}
                className="bg-white py-4 px-6 rounded shadow text-left"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Troubleshooter */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">
            🔧 Built-in Printer Troubleshooter — Fix All Common Printer Problems
            Instantly!
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-gray-700 text-lg">
            {[
              "Printer not responding or going offline",
              "Print spooler errors",
              "Paper jam and print queue stuck issues",
              "USB printer connection problems",
              "Network printer detection issues",
              "Printer showing as 'Unavailable'",
              "Slow or incomplete printing",
              "Print quality issues (blurred or missing lines)",
            ].map((issue, index) => (
              <li key={index} className="bg-gray-100 p-4 rounded shadow">
                {issue}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Download Section */}
      <section
        id="download"
        className="py-16 bg-gradient-to-r from-green-500 to-green-600 text-white text-center"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">✅ Try it Free Today!</h2>
          <p className="mb-8 text-lg">
            Unlimited scans and driver backup in free version. Upgrade for
            automatic updates, advanced troubleshooting, and premium features.
          </p>
          <a
            href="#"
            className="bg-white text-green-600 font-semibold py-3 px-8 rounded shadow-lg hover:bg-gray-200 transition"
          >
            Download Now
          </a>
          <p className="mt-6 text-sm">
            Last driver database update: 18.03.2025 | Version: 3.1.0.48720
          </p>
          <p className="mt-2 text-sm">
            Trusted by over 7,650,215 users worldwide
          </p>
        </div>
      </section>
    </main>
  );
}
