"use client";
import React from "react";
import clsx from "clsx";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  size?: "small" | "medium" | "large";
  className?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  size = "medium",
  className = "",
  disabled = false,
  ...rest
}) => {
  const sizeStyles: Record<string, string> = {
    small: "w-4 h-4",
    medium: "w-6 h-6",
    large: "w-8 h-8",
  };

  const checkboxSize = sizeStyles[size] || sizeStyles.medium;

  return (
    <label
      className={clsx(
        "flex items-center cursor-pointer space-x-2",
        className
      )}
    >
      <div
        className={clsx(
          "relative flex items-center justify-center rounded-sm",
          "bg-background-variant shadow-[inset_2px_2px_5px_rgba(0,0,0,0.15),inset_-2px_-2px_5px_rgba(255,255,255,0.6)]",
          checkboxSize,
          {
            "bg-gray-300": disabled,
            "bg-blue-500": checked && !disabled,
          }
        )}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange && onChange(e)}
          disabled={disabled}
          className="absolute opacity-0 cursor-pointer"
          {...rest}
        />
        <div
          className={clsx(
            "absolute rounded-sm transition-colors duration-300",
            checked ? "bg-blue-500" : "bg-gray-300",
            checkboxSize
          )}
        >
          {checked && !disabled && (
            <svg
              className="w-full h-full text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12l4 4 8-8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
      {label && <span className={clsx("text-base", disabled && "text-gray-500")}>{label}</span>}
    </label>
  );
};

export default Checkbox;
