"use client";
import React, { useEffect, useState } from "react";
import clsx from "clsx";

type LEDLightProps = {
  size?: number;
  color?: string;
  className?: string;
  enabled?: boolean;
};

const LEDLight: React.FC<LEDLightProps> = ({
  size = 100,
  color = "red",
  className = "",
  enabled = true,
}) => {
  const [ledColor, setLedColor] = useState("inherit");
  const [shadowColor, setShadowColor] = useState("inherit");

  useEffect(() => {
    if (enabled) {
      setLedColor(color);
      setShadowColor(`${color}, ${color}66`); 
    } else {
      setLedColor("inherit");
      setShadowColor("inherit, inherit"); 
    }
  }, [color, enabled]);

  return (
    <div
      className={clsx(
        "relative flex items-center justify-center rounded-full bg-gray-200",
        "shadow-[inset_3px_3px_6px_rgba(0,0,0,0.2),inset_-3px_-3px_6px_rgba(255,255,255,0.6)]",
        className
      )}
      style={{ width: size, height: size }}
    >
      <div
        className={clsx(
          "absolute rounded-full",
          "shadow-[0px_0px_10px_rgba(0,0,0,0.2)] transition-all duration-300"
        )}
        style={{
          width: size / 1.55,
          height: size / 1.55,
          backgroundColor: ledColor,
          boxShadow: `0 0 10px ${shadowColor}, 0 0 20px ${shadowColor}`,
          filter: "blur(0.8px)",
          transition: "background-color 0.5s ease, box-shadow 0.5s ease",
        }}
      />
    </div>
  );
};

export default LEDLight;
