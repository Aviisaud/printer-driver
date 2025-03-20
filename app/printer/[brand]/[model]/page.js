"use client";
import { useParams } from "next/navigation";
import HpModelPage from "@/components/printer-model-pages/HpModelPage";
import CanonModelPage from "@/components/printer-model-pages/CanonModelPage";
import BrotherModelPage from "@/components/printer-model-pages/BrotherModelPage";
import EpsonModelPage from "@/components/printer-model-pages/EpsonModelPage";

const PrinterModelSetupPage = () => {
  const { brand, model } = useParams();

  if (brand === "hp") return <HpModelPage model={model} />;
  if (brand === "canon") return <CanonModelPage model={model} />;
  if (brand === "brother") return <BrotherModelPage model={model} />;
  if (brand === "epson") return <EpsonModelPage model={model} />;

  return <div className="text-center p-6">No setup found for this printer.</div>;
};

export default PrinterModelSetupPage;
