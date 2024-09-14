import React, { ReactNode } from "react";
import clsx from "clsx";

type Elevation = "none" | "outside" | "inside" | "mix";

type ChipProps = {
  children: ReactNode;
  className?: string;
  elevation?: Elevation;
  rounded?: boolean;
};

const Chip: React.FC<ChipProps> = ({
  children,
  className = "",
  elevation = "none",
  rounded = true,
}) => {
  const elevationClasses = {
    none: "",
    outside:
      "shadow-[2px_2px_8px_rgba(0,0,0,0.15),-2px_-2px_8px_rgba(255,255,255,0.7)]",
    inside:
      "shadow-[inset_2px_2px_5px_rgba(0,0,0,0.15),inset_-2px_-2px_5px_rgba(255,255,255,0.6)]",
    mix: "shadow-[0_4px_6px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.1),inset_1px_1px_3px_rgba(255,255,255,0.7),inset_-1px_-1px_3px_rgba(0,0,0,0.1)]",
  };

  return (
    <div
      className={clsx(
        "px-6 py-2",
        elevationClasses[elevation],
        "bg-gradient-to-r from-background-card to-background-card-secondary border border-muted/20",
        rounded ? "rounded-full" : "rounded-sm",
        "inline-block",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Chip;
