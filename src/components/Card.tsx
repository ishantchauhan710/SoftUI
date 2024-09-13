// components/Card.tsx
import React, { ReactNode } from "react";
import clsx from "clsx";

type Elevation = "none" | "outside" | "inside" | "mix";
type Variant = "default" | "air" | "lcd";

type CardProps = {
  children: ReactNode;
  className?: string;
  elevation?: Elevation;
  variant?: Variant;
  rounded?: boolean;
};

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  elevation = "none",
  variant = "default",
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

  const variantClasses = {
    default:
      "bg-gradient-to-r from-background-card to-background-card-secondary border border-muted/20",
    air: "bg-gradient-to-r from-background-card-secondary to-background-card border border-muted/20",
    lcd: "bg-background-card-lcd border border-muted-dark",
  };

  return (
    <div
      className={clsx(
        "p-6",
        elevationClasses[elevation],
        variantClasses[variant],
        rounded ? "rounded-2xl" : "",
        "inline-block",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
