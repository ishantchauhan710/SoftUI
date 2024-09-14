"use client";
import { useState } from "react";
import FeatureContainer from "./FeatureContainer";
import Slider from "@/components/Slider";

export default function SliderDemo() {
  const [value1, setValue1] = useState(20);
  const [value2, setValue2] = useState(60);
  const [value3, setValue3] = useState(15);

  return (
    <FeatureContainer title="Sliders" id="Slider">
      <div className="mt-4 space-y-8">
        <Slider
          size="small"
          progressColor="green"
          value={value1}
          onChange={(val) => setValue1(val)}
        />
        <Slider
          size="medium"
          progressColor="red"
          value={value2}
          onChange={(val) => setValue2(val)}
        />
        <Slider
          size="large"
          progressColor="blue"
          value={value3}
          onChange={(val) => setValue3(val)}
        />
      </div>
    </FeatureContainer>
  );
}
