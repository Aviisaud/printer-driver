"use client";
import { useParams } from "next/navigation";
import React from "react";
import HpSearchPage from "@/components/brand-pages/HpSearchPage";
import CanonSearchPage from "@/components/brand-pages/CanonSearchPage";
import BrotherSearchPage from "@/components/brand-pages/BrotherSearchPage";
import EpsonSearchPage from "@/components/brand-pages/EpsonSearchPage";

const BrandSearchPage = () => {
  const { brand } = useParams();

  if (brand === "hp") return <HpSearchPage />;
  if (brand === "canon") return <CanonSearchPage />;
  if (brand === "brother") return <BrotherSearchPage />;
  if (brand === "epson") return <EpsonSearchPage />;

  return <div className="text-center p-6">Brand not supported.</div>;
};

export default BrandSearchPage;
