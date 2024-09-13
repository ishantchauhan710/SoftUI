import React, { ReactNode } from "react";
import clsx from "clsx";

type TypographyProps = {
  variant?: "h1" | "h2" | "h3" | "body1" | "body2" | "caption";
  children: ReactNode;
  className?: string;
  noShadow?: boolean;
};

const Typography: React.FC<TypographyProps> = ({
  variant = "body1",
  children,
  className = "",
  noShadow = false,
}) => {
  const baseStyles = {
    h1: "text-4xl font-bold text-text",
    h2: "text-3xl font-semibold text-text",
    h3: "text-2xl font-medium text-text",
    body1: "text-base font-normal text-text",
    body2: "text-sm font-light text-muted",
    caption: "text-xs font-light text-gray-500 text-muted",
  };

  const shadowClass = noShadow ? "" : "text-shadow";

  const Component =
    variant === "h1" || variant === "h2" || variant === "h3" ? variant : "p";

  return (
    <Component className={clsx(baseStyles[variant], shadowClass, className)}>
      {children}
    </Component>
  );
};

export default Typography;
