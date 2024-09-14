"use client";
import { useEffect, useRef, useState } from "react";
import FeatureContainer from "./FeatureContainer";
import LCDScreen from "@/components/LCDScreen";

export default function LCDScreenDemo() {
  // CLOCK
  const [hours, setHours] = useState<string>("00");
  const [minutes, setMinutes] = useState<string>("00");
  const [seconds, setSeconds] = useState<string>("00");

  useEffect(() => {
    const timerId = setInterval(() => {
      const currentTime = new Date();

      setHours(addLeadingZero(currentTime.getHours()));
      setMinutes(addLeadingZero(currentTime.getMinutes()));
      setSeconds(addLeadingZero(currentTime.getSeconds()));
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const addLeadingZero = (num: number) =>
    num < 10 ? `0${num}` : num.toString();

  // Temperature
  const [temperature, setTemperature] = useState(20);

  useEffect(() => {
    const temperatureId = setInterval(() => {
      setTemperature((prevTemperature) => {
        const newTemperature = prevTemperature + 1;
        if (newTemperature >= 25) {
          return 16;
        }
        return newTemperature;
      });
    }, 1000);

    return () => clearInterval(temperatureId);
  }, []);

  // Wave
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const amplitude = 50; // Height of the wave
    const frequency = 0.1; // Frequency of the wave

    let offset = 0;

    const drawWave = () => {
      ctx.clearRect(0, 0, width, height); // Clear the canvas

      ctx.beginPath();
      ctx.moveTo(0, height / 2);

      for (let x = 0; x < width; x++) {
        const y = amplitude * Math.sin(frequency * x + offset) + height / 2;
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = "#555555";
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    const animate = () => {
      drawWave();
      offset -= 0.05; // Adjust this value to control the speed of the wave
      requestAnimationFrame(animate);
    };

    animate(); // Start the animation
  }, []);

  // Inline styles for the canvas to handle animation
  const canvasStyle: React.CSSProperties = {
    display: "block",
    animation: "moveCanvas 10s linear infinite",
    backgroundColor: "transparent",
  };

  return (
    <FeatureContainer title="LCD Screens" id="LCD">
      <div className="space-y-3">
        <div className="flex gap-4 items-center flex-wrap">
          {/* CLOCK */}
          <LCDScreen className="min-w-[160px]">
            {`${hours}:${minutes}:${seconds}`}
          </LCDScreen>
          {/* TEMPERATURE */}
          <LCDScreen className="min-w-[160px]">{`${temperature}°C`}</LCDScreen>
        </div>
        {/* WAVE */}
        <div>
          <LCDScreen showGrid={true}>
            <canvas
              ref={canvasRef}
              width={200}
              height={120}
              style={canvasStyle}
            />
          </LCDScreen>
        </div>
      </div>
    </FeatureContainer>
  );
}
