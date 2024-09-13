import React, { ReactNode } from "react";
import clsx from "clsx";

type TypographyProps = {
  variant?: "h1" | "h2" | "h3" | "body1" | "body2" | "caption";
  children: ReactNode;
  className?: string;
};

const Typography: React.FC<TypographyProps> = ({
  variant = "body1",
  children,
  className = "",
}) => {
  const baseStyles = {
    h1: "text-4xl font-bold text-text text-shadow",
    h2: "text-3xl font-semibold text-text text-shadow",
    h3: "text-2xl font-medium text-text text-shadow",
    body1: "text-base font-normal text-text text-shadow",
    body2: "text-sm font-light text-text-muted",
    caption: "text-xs font-light text-gray-500 text-text-muted",
  };

  const Component =
    variant === "h1" || variant === "h2" || variant === "h3" ? variant : "p";

  return (
    <Component className={clsx(baseStyles[variant], className)}>
      {children}
    </Component>
  );
};

export default Typography;
