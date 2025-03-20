"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const DownloadModal = ({ isOpen, onClose }) => {
  const [progress, setProgress] = useState(0);
  const [installProgress, setInstallProgress] = useState(0);
  const [isInstalling, setIsInstalling] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setProgress(0);
      setInstallProgress(0);
      setIsInstalling(false);

      const downloadInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(downloadInterval);
            setIsInstalling(true);
            return 100;
          }
          return prev + 1;
        });
      }, 60);

      return () => clearInterval(downloadInterval);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isInstalling) {
      const installInterval = setInterval(() => {
        setInstallProgress((prev) => {
          if (prev >= 100) {
            clearInterval(installInterval);

            // Auto-close after completion and redirect to /printermodel
            setTimeout(() => {
              onClose();
              setTimeout(() => {
                router.push("/printermodel");
              }, 2000);
            }, 500);

            return 100;
          }
          return prev + 2;
        });
      }, 200);

      return () => clearInterval(installInterval);
    }
  }, [isInstalling, onClose, router]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full transition-all duration-300 ease-in-out text-black">
        <h2 className="text-2xl font-bold mb-4">
          Download Printer Driver Updater
        </h2>

        {progress < 100 ? (
          <>
            <p className="mb-4">Your download will start shortly...</p>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-3 overflow-hidden">
              <div
                className="bg-green-500 h-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-center text-gray-600 mb-6">
              Downloading... {progress}%
            </p>
          </>
        ) : (
          <>
            <p className="text-green-600 mb-4">
              Download Completed. Starting Installation...
            </p>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-3 overflow-hidden">
              <div
                className="bg-blue-500 h-full transition-all duration-500"
                style={{ width: `${installProgress}%` }}
              ></div>
            </div>
            <p className="text-center text-gray-600 mb-6">
              Installing... {installProgress}%
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default DownloadModal;
