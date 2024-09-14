import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  size?: "small" | "medium" | "large";
  loading?: boolean;
  disabled?: boolean;
  className?: string;
};

// Size styles
const sizeStyles = {
  small: "px-4 py-2 text-sm",
  medium: "px-6 py-3 text-base",
  large: "px-8 py-4 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  label,
  size = "medium",
  loading = false,
  disabled = false,
  className,
  ...rest
}) => {
  return (
    <button
      {...rest}
      disabled={disabled || loading}
      className={clsx(
        "rounded-md focus:outline-none transition-all duration-300",
        sizeStyles[size],
        "relative inline-flex justify-center items-center",
        "shadow-[2px_2px_8px_rgba(0,0,0,0.1),-2px_-2px_8px_rgba(255,255,255,0.7)]", // Neumorphism shadow
        disabled || loading
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : "bg-background-variant text-gray-700 hover:shadow-md",
        className
      )}
    >
      {loading ? (
        <div className="w-5 h-5 border-4 border-t-transparent border-gray-400 rounded-full animate-spin"></div> // Loading spinner
      ) : (
        <span>{label}</span>
      )}
    </button>
  );
};

export default Button;
