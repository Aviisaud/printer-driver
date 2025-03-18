import React from "react";

const WhyUs = () => {
  return (
    <div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-12">
            {[
              {
                title: "Step 1",
                desc: "Download & install All-in-One Printer Driver Updater",
                img: "/img/install-image.png",
              },
              {
                title: "Step 2",
                desc: "Scan your system for outdated or missing printer drivers",
                img: "/img/scan-drivers.png",
              },
              {
                title: "Step 3",
                desc: "Install the latest official drivers with a single click",
                img: "/img/update-drivers.png",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded shadow text-center"
              >
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-15 object-contain mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
