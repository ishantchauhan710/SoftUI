import React from "react";
import clsx from "clsx";

type SizeTypes = "small" | "medium" | "large";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: SizeTypes;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  size = "medium",
  startIcon,
  endIcon,
  className = "",
  ...textareaProps
}) => {
  const sizeStyles: Record<SizeTypes, string> = {
    small: "text-sm py-1 px-2",
    medium: "text-base py-2 px-3",
    large: "text-lg py-3 px-4",
  };

  const sizeClass = sizeStyles[size] || sizeStyles.medium;

  return (
    <div
      className={clsx(
        "flex items-center rounded-lg bg-background-variant",
        "shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.7)]",
        className
      )}
    >
      {startIcon && <div className="mr-2">{startIcon}</div>}
      <textarea
        className={clsx("resize-none flex-1 bg-transparent outline-none", sizeClass)}
        {...textareaProps}
      />
      {endIcon && <div className="ml-2">{endIcon}</div>}
    </div>
  );
};

export default TextArea;
