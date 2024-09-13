"use client";
import Switch from "@/components/Switch";
import { useState } from "react";
import FeatureContainer from "./FeatureContainer";

export default function SwitchDemo() {
  const [switchAEnabled, setSwitchAEnabled] = useState(true);
  const [switchBEnabled, setSwitchBEnabled] = useState(true);
  const [switchCEnabled, setSwitchCEnabled] = useState(true);

  return (
    <FeatureContainer title="Switch Buttons">
      <div>
        <div className="flex items-center gap-4">
          <Switch
            enabled={switchAEnabled}
            onToggle={(val) => setSwitchAEnabled(val)}
            size="large"
          />
          <Switch
            enabled={switchBEnabled}
            onToggle={(val) => setSwitchBEnabled(val)}
            size="medium"
          />
          <Switch
            enabled={switchCEnabled}
            onToggle={(val) => setSwitchCEnabled(val)}
            size="small"
          />
        </div>
      </div>
    </FeatureContainer>
  );
}
