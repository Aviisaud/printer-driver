import React from "react";

const PrinterBrands = () => {
  return (
    <div>
      {/* Supported Brands */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
            ✅ Supported Printer Brands
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            We support drivers for all major printer manufacturers — verified,
            trusted, and always up to date.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
            {[
              "/img/printer-brands/HP.png",
              "/img/printer-brands/Canon.png",
              "/img/printer-brands/epson.png",
              "/img/printer-brands/brother.png",
              "/img/printer-brands/lexmark.png",
              "/img/printer-brands/samsung.png",
              "/img/printer-brands/xerox.png",
              "/img/printer-brands/Dell.png",
            ].map((imgSrc, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex items-center justify-center"
              >
                <img
                  src={imgSrc}
                  alt="Printer brand logo"
                  className="h-10 w-auto object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooter */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
            🔧 Built-in Printer Troubleshooter — Fix All Common Printer Problems
            Instantly!
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Our intelligent troubleshooter detects and resolves common printer
            issues with just one click — keeping you printing without
            interruptions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "bi-wifi-off",
                title: "Printer Offline",
                desc: "Detects and fixes connection or offline issues quickly.",
              },
              {
                icon: "bi-exclamation-triangle",
                title: "Print Spooler Errors",
                desc: "Resolves stuck print jobs and spooler service errors.",
              },
              {
                icon: "bi-file-earmark-excel",
                title: "Paper Jam Issues",
                desc: "Clears paper jam errors and resets stuck queues.",
              },
              {
                icon: "bi-usb-drive",
                title: "USB Connection Problems",
                desc: "Identifies and fixes issues with USB printer connections.",
              },
              {
                icon: "bi-router",
                title: "Network Detection",
                desc: "Helps find and connect to network printers.",
              },
              {
                icon: "bi-x-octagon",
                title: "Printer Unavailable",
                desc: "Fixes errors where the printer appears as unavailable.",
              },
              {
                icon: "bi-hourglass-split",
                title: "Slow Printing",
                desc: "Speeds up performance for delayed or partial prints.",
              },
              {
                icon: "bi-droplet-half",
                title: "Print Quality Issues",
                desc: "Improves print output and fixes blurred lines or missing ink.",
              },
            ].map((issue, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl transition duration-300 text-center"
              >
                <i className={`${issue.icon} text-4xl text-green-500 mb-4`}></i>
                <h3 className="text-xl font-semibold mb-2 text-slate-800 mt-4">
                  {issue.title}
                </h3>
                <p className="text-gray-600">{issue.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrinterBrands;
