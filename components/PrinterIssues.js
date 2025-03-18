import React from "react";

const PrinterIssues = () => {
  return (
    <div>
      {/* Features */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
            Key Features
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore the powerful features of our All-in-One Printer Driver
            Updater designed to keep your printers running smoothly,
            efficiently, and without hassle.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "bi-search",
                text: "Automatic printer driver scanning and installation",
              },
              {
                icon: "bi-hdd-stack",
                text: "Database of over 1 million drivers",
              },
              {
                icon: "bi-shield-check",
                text: "Verified & official drivers only",
              },
              {
                icon: "bi-arrow-repeat",
                text: "Regular driver database updates",
              },
              {
                icon: "bi-cloud-arrow-down",
                text: "Backup & restore options to roll back drivers if needed",
              },
              {
                icon: "bi-tools",
                text: "Built-in troubleshooting for printer errors",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition duration-300 text-center flex flex-col items-center"
              >
                <i
                  className={`${feature.icon} text-5xl text-green-500 mb-4`}
                ></i>
                <p className="text-lg font-medium text-gray-700">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
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
    </div>
  );
};

export default PrinterIssues;
