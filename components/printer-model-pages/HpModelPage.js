"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const HpModelPage = () => {
  const { model } = useParams();
  const [userOS, setUserOS] = useState("");
  const [manualOS, setManualOS] = useState("");
  const [connectionType, setConnectionType] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const decodedModel = capitalizeWords(
    decodeURIComponent(model).replaceAll("-", " ")
  );

  useEffect(() => {
    const detectOS = () => {
      const userAgent = window.navigator.userAgent;

      if (userAgent.includes("Windows NT 10.0")) return "Windows 10 / 11";
      if (userAgent.includes("Windows NT 6.3")) return "Windows 8.1";
      if (userAgent.includes("Windows NT 6.2")) return "Windows 8";
      if (userAgent.includes("Windows NT 6.1")) return "Windows 7";
      if (userAgent.includes("Mac OS X")) return "macOS";
      if (/Linux/.test(userAgent)) return "Linux";
      return "Unknown OS";
    };

    const os = detectOS();
    setUserOS(os);
  }, []);

  const handleManualSelect = (e) => {
    setManualOS(e.target.value);
  };

  const finalOS = userOS !== "Unknown OS" ? userOS : manualOS;

  const handleConnectionSelect = (type) => {
    setConnectionType(type);
    setStep(2);
  };

  const handleNextStep = () => {
    setLoading(true);
    setTimeout(() => {
      setStep((prev) => prev + 1);
      setLoading(false);
    }, 1000);
  };

  const Spinner = () => (
    <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
  );

  return (
    <div className="p-6 sm:p-10 max-w-5xl mx-auto font-sans text-gray-800">
      <header className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <img
            src="/img/hp-images/hp-printer-icon.png"
            alt="HP Printer"
            className="w-16 h-16 object-cover rounded-md"
          />
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold text-blue-800">
              {decodedModel} Printer Setup
            </h1>
          </div>
        </div>
      </header>

      {/* OS Section */}
      <section className="mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded">
          {userOS === "Unknown OS" ? (
            <div>
              <p className="mb-2 font-medium">
                We couldn't detect your operating system. Please choose it
                manually:
              </p>
              <select
                value={manualOS}
                onChange={handleManualSelect}
                className="mt-1 border border-gray-300 rounded px-3 py-2 w-full sm:w-1/2"
              >
                <option value="">Select your OS</option>
                <option value="Windows 11">Windows 11</option>
                <option value="Windows 10">Windows 10</option>
                <option value="Windows 8.1">Windows 8.1</option>
                <option value="Windows 8">Windows 8</option>
                <option value="Windows 7">Windows 7</option>
                <option value="macOS">macOS</option>
                <option value="Linux">Linux</option>
              </select>
            </div>
          ) : (
            <p className="text-md font-medium">
              Detected Operating System:{" "}
              <span className="text-blue-700 font-semibold">{userOS}</span>
            </p>
          )}
        </div>
      </section>

      <div className="space-y-6">
        {/* Step 1 */}
        {step === 1 && (
          <section className="mb-6 bg-white border border-gray-200 p-6 rounded shadow-sm h-72">
            <h2 className="text-xl font-semibold mb-2">Connection Options</h2>
            <p className="mb-4 text-gray-600">
              How are you going to connect the device to you computer?
            </p>
            <div className="flex gap-16 pt-4">
              {/* USB Connection */}
              <div
                className="cursor-pointer"
                onClick={() => handleConnectionSelect("USB")}
              >
                <img
                  src="/img/hp-images/printer-usb-connection.png"
                  alt="USB Connection"
                  className="w-60 mx-auto hover:scale-105 transition-transform"
                />
                <p className="text-sm">USB - Connect the device to this Computer</p>
              </div>

              {/* Wi-Fi Connection */}
              <div
                className="cursor-pointer"
                onClick={() => handleConnectionSelect("Wi-Fi")}
              >
                <img
                  src="/img/hp-images/printer-wifi-connection.png"
                  alt="Wireless Connection"
                  className="w-60 mx-auto hover:scale-105 transition-transform"
                />
                <p className="text-sm">Wireless - Make a wireless connection to this device</p>
              </div>
            </div>
          </section>
        )}

        {/* Step 2 */}
        {step === 2 && connectionType && (
          <section className="mb-6 bg-white border border-gray-200 p-6 rounded shadow-sm h-72">
            <h2 className="text-xl font-semibold mb-2">
              Step 2: Download Driver
            </h2>
            <p className="mb-4 text-sm text-gray-600">
              Download the latest driver for <strong>{decodedModel}</strong>{" "}
              compatible with <strong>{finalOS}</strong> and your selected
              connection type: <strong>{connectionType}</strong>.
            </p>
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded transition duration-150"
            >
              Download Driver for {connectionType}
            </a>
            <div className="flex justify-center items-center mt-4">
              {loading ? (
                <Spinner />
              ) : (
                <button
                  onClick={handleNextStep}
                  className="bg-green-600 text-white px-6 py-2 mt-4 rounded shadow-md hover:bg-green-700"
                >
                  Next: Install Driver
                </button>
              )}
            </div>
          </section>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <section className="mb-6 bg-white border border-gray-200 p-6 rounded shadow-sm h-72">
            <h2 className="text-xl font-semibold mb-2">
              Step 3: Install Driver
            </h2>
            <p className="mb-4 text-sm text-gray-600">
              After downloading the driver, follow the installation instructions
              to install the driver on your computer.
            </p>
            <div className="flex justify-center items-center mt-4">
              {loading ? (
                <Spinner />
              ) : (
                <button
                  onClick={handleNextStep}
                  className="bg-green-600 text-white px-6 py-2 mt-4 rounded shadow-md hover:bg-green-700"
                >
                  Next: Finalize Setup
                </button>
              )}
            </div>
          </section>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <section className="mb-6 bg-white border border-gray-200 p-6 rounded shadow-sm h-72">
            <h2 className="text-xl font-semibold mb-2">
              Step 4: Finalize Setup
            </h2>
            <p className="mb-4 text-sm text-gray-600">
              Your printer is now ready for use! If you need further assistance,
              please refer to our troubleshooting section or contact support.
            </p>
            <div className="flex justify-center items-center mt-4">
              {loading ? (
                <Spinner />
              ) : (
                <button className="bg-green-600 text-white px-6 py-2 mt-4 rounded shadow-md hover:bg-green-700">
                  Finish Setup
                </button>
              )}
            </div>
          </section>
        )}
      </div>

      {/* Support Section */}
      <section className="text-center text-sm text-gray-500 mt-10">
        <p>
          Need help?{" "}
          <a href="/support" className="text-blue-600 hover:underline">
            Contact HP Support
          </a>
        </p>
      </section>
    </div>
  );
};

export default HpModelPage;
