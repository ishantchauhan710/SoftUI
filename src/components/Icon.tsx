"use client";
import React from "react";

type IconProps = {
  icon: React.ReactElement;
  size?: number;
  className?: string;
  onClick?: () => void;
};

const Icon: React.FC<IconProps> = ({
  icon,
  size = 24,
  className = "",
  onClick,
}) => {
  const IconElement = React.cloneElement(icon, {
    size,
    className: `inline-block ${className}`,
    style: {
      filter:
        "drop-shadow(1px 1px 2px rgba(255, 255, 255, 0.7)) drop-shadow(-1px -1px 2px rgba(0, 0, 0, 0.2))",
    },
  });

  return (
    <div
      className="inline-flex items-center justify-center"
      style={{ width: size, height: size }}
      onClick={() => onClick?.()}
    >
      {IconElement}
    </div>
  );
};

export default Icon;
