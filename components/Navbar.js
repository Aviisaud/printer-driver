import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-white">
        <div className="text-3xl font-bold mb-2 md:mb-0">Printer-Driver</div>
        <div className="text-lg">United States</div>
      </div>
    </nav>
  );
};
export default Navbar;
