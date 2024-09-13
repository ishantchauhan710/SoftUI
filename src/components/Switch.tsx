"use client";
import React from "react";
import clsx from "clsx";

type SwitchProps = {
  enabled: boolean;
  onToggle: (param: boolean) => void;
  size?: "small" | "medium" | "large";
  className?: string;
};

const Switch: React.FC<SwitchProps> = ({
  enabled,
  onToggle,
  size = "medium",
  className,
}) => {
    
  const sizeStyles = {
    small: {
      switch: "w-10 h-5 rounded-lg",
      circle: "w-3 h-3 rounded-md",
      translate: "translate-x-6",
      text: "text-xs",
    },
    medium: {
      switch: "w-14 h-7 rounded-xl",
      circle: "w-5 h-5 rounded-lg",
      translate: "translate-x-8",
      text: "text-sm",
    },
    large: {
      switch: "w-20 h-10 rounded-2xl",
      circle: "w-8 h-8 rounded-xl",
      translate: "translate-x-11",
      text: "text-base",
    },
  };

  return (
    <div
      className={clsx(
        "relative inline-flex items-center cursor-pointer transition-all duration-300",
        className
      )}
      onClick={() => onToggle(!enabled)}
    >
      <div
        className={clsx(
          "flex items-center justify-between px-1 bg-gradient-to-r from-background-card to-background-card-secondary border border-muted/20 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.15),inset_-2px_-2px_5px_rgba(255,255,255,0.4)]",
          sizeStyles[size].switch
        )}
      >
        <span
          className={clsx(
            sizeStyles[size].text,
            "text-muted font-semibold transition-opacity duration-300 text-sm mx-2",
            enabled ? "opacity-100" : "opacity-0",
            size !== "large" && "hidden"
          )}
        >
          on
        </span>
        <span
          className={clsx(
            sizeStyles[size].text,
            "text-muted font-semibold transition-opacity duration-300 text-sm mx-2",
            !enabled ? "opacity-100" : "opacity-0",
            size !== "large" && "hidden"
          )}
        >
          off
        </span>
      </div>
      <div
        className={clsx(
          "flex items-center justify-center absolute top-1 bg-white shadow-md transition-transform duration-300",
          sizeStyles[size].circle,
          enabled ? sizeStyles[size].translate : "translate-x-1"
        )}
      >
        <div className="h-[50%] rounded-full w-[3px] bg-background-card shadow-sm"></div>
      </div>
    </div>
  );
};

export default Switch;
