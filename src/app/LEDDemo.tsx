"use client";
import LEDLight from "@/components/LEDLight";
import Switch from "@/components/Switch";
import { useState } from "react";
import FeatureContainer from "./FeatureContainer";

export default function LEDDemo() {
  const [ledEnabled, setLedEnabled] = useState(true);

  return (
    <FeatureContainer title="LED Lights">
      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-4">
          <LEDLight color="#ef4444" size={20} enabled={ledEnabled} />
          <LEDLight color="#fcd34d" size={20} enabled={ledEnabled} />
          <LEDLight color="#4ade80" size={20} enabled={ledEnabled} />
        </div>
        <div>
          <Switch
            size="large"
            enabled={ledEnabled}
            onToggle={() => setLedEnabled(!ledEnabled)}
          />
        </div>
      </div>
    </FeatureContainer>
  );
}
