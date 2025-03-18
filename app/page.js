import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyUs from "@/components/WhyUs";
import PrinterBrands from "@/components/PrinterBrands";
import PrinterIssues from "@/components/PrinterIssues";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <WhyUs />
    <PrinterBrands />
    <PrinterIssues />
    </>
  );
}
