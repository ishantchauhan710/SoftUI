"use client";
import React from "react";
import clsx from "clsx";

type SizeTypes = "small" | "medium" | "large";

type SelectOption = {
  value: string | number;
  label: string;
};

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: SelectOption[];
  fieldSize?: SizeTypes;
  className?: string;
};

// Explicitly typing the sizeStyles keys
const sizeStyles: Record<SizeTypes, string> = {
  small: "px-2 py-1 text-sm",
  medium: "px-3 py-2 text-base",
  large: "px-4 py-3 text-lg",
};

const Select: React.FC<SelectProps> = ({
  options,
  fieldSize = "medium",
  disabled = false,
  className,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        "relative inline-block rounded-full",
        "shadow-[inset_2px_2px_5px_rgba(0,0,0,0.15),inset_-2px_-2px_5px_rgba(255,255,255,0.6)]",
        className
      )}
    >
      <select
        {...rest}
        disabled={disabled}
        className={clsx(
          "appearance-none rounded-full focus:outline-none w-full",
          sizeStyles[fieldSize], // Use the correct size styles
          "bg-background-variant text-gray-700 cursor-pointer",
          "shadow-[inset_2px_2px_5px_rgba(0,0,0,0.15),inset_-2px_-2px_5px_rgba(255,255,255,0.6)]", // Inner shadow
          disabled ? "bg-gray-300 cursor-not-allowed text-gray-500" : ""
        )}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Arrow Icon */}
      <div
        className={clsx(
          "absolute top-1/2 right-3 transform -translate-y-1/2",
          "text-gray-500",
          "pointer-events-none"
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </div>
  );
};

export default Select;
