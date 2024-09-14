import React from "react";
import clsx from "clsx";

type SliderProps = {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
  size?: "small" | "medium" | "large";
  className?: string;
  progressColor?: string;
};

const Slider: React.FC<SliderProps> = ({
  value,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  size = "medium",
  className,
  progressColor = "red",
}) => {
  const sizeStyles = {
    small: {
      trackHeight: "h-2",
      thumbSize: "w-10 h-8",
      thumbOffset: 20,
    },
    medium: {
      trackHeight: "h-3",
      thumbSize: "w-12 h-10",
      thumbOffset: 20,
    },
    large: {
      trackHeight: "h-4",
      thumbSize: "w-14 h-12",
      thumbOffset: 24,
    },
  };

  const percentage = ((value - min) / (max - min)) * 100;

  const thumbOffset =
    percentage === 0
      ? 0
      : percentage === 100
      ? sizeStyles[size].thumbOffset * 2
      : sizeStyles[size].thumbOffset;

  return (
    <div
      className={clsx(
        "relative flex items-center bg-background-variant px-3 py-2 rounded-full",
        "shadow-[inset_2px_2px_5px_rgba(0,0,0,0.15),inset_-2px_-2px_5px_rgba(255,255,255,0.6)]",
        className
      )}
    >
      <div
        className={clsx(
          "relative rounded-full bg-background-variant",
          "shadow-[inset_2px_2px_5px_rgba(0,0,0,0.15),inset_-2px_-2px_5px_rgba(255,255,255,0.6)]",
          sizeStyles[size].trackHeight,
          "w-full"
        )}
      >
        <div
          className={clsx("absolute top-0 left-0 rounded-full")}
          style={{
            background: progressColor,
            height: "100%",
            width: `${percentage}%`,
          }}
        />
      </div>

      <div
        className={clsx(
          "absolute top-1/2 transform -translate-y-1/2 rounded-lg border border-white bg-background-variant flex items-center justify-center",
          "shadow-[2px_2px_8px_rgba(0,0,0,0.1),-2px_-2px_8px_rgba(255,255,255,0.7)]",
          sizeStyles[size].thumbSize
        )}
        style={{ left: `calc(${percentage}% - ${thumbOffset}px)` }} // Adjust thumb positioning
      >
        <div className="h-[50%] rounded-full w-[3px] bg-background-card shadow-sm"></div>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="absolute w-full h-full opacity-0 cursor-pointer"
      />
    </div>
  );
};

export default Slider;
