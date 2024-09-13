"use client";
import { useState } from "react";
import FeatureContainer from "./FeatureContainer";
import LCDScreen from "@/components/LCDScreen";

export default function LCDScreenDemo() {
  const [ledEnabled, setLedEnabled] = useState(true);

  return (
    <FeatureContainer title="LCD Screens">
      <LCDScreen />
    </FeatureContainer>
  );
}
