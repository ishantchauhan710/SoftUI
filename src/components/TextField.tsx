import React from "react";
import clsx from "clsx";

type SizeTypes = "small" | "medium" | "large";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fieldSize?: SizeTypes;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  fieldSize = "medium",
  startIcon,
  endIcon,
  className = "",
  ...inputProps
}) => {
  const sizeStyles: Record<SizeTypes, string> = {
    small: "text-sm py-1 px-2",
    medium: "text-base py-2 px-3",
    large: "text-lg py-3 px-4",
  };

  const sizeClass = sizeStyles[fieldSize] || sizeStyles.medium;

  return (
    <div
      className={clsx(
        "flex items-center rounded-lg bg-background-variant",
        "shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.7)]",
        sizeClass,
        className
      )}
    >
      {startIcon && <div className="mr-2 text-muted">{startIcon}</div>}
      <input
        className={clsx(
          "flex-1 bg-transparent outline-none",
          startIcon && "pl-1",
          endIcon && "pr-1"
        )}
        {...inputProps}
      />
      {endIcon && <div className="ml-2 text-muted">{endIcon}</div>}
    </div>
  );
};

export default TextField;
