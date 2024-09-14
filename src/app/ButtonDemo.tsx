"use client";
import Button from "@/components/Button";
import FeatureContainer from "./FeatureContainer";
import { useState } from "react";

export default function ButtonDemo() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // Simulate a loading state for 2 seconds
  };

  return (
    <FeatureContainer title="Buttons">
      <div className="space-y-4">
        <div>
          <Button
            label="Submit"
            size="medium"
            loading={loading}
            onClick={handleClick}
            className="w-32"
          />
        </div>
        <div>
          <Button label="Cancel" size="small" className="w-24" />
        </div>
        <div>
          <Button label="Large Button" size="large" className="w-fit" />
        </div>
      </div>
    </FeatureContainer>
  );
}
