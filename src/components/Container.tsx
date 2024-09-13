import React, { ReactNode } from "react";
import clsx from "clsx";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl";
};

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  maxWidth = "lg",
}) => {
  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
  };

  return (
    <div
      className={clsx(
        "w-full px-4 sm:px-6 lg:px-8 mx-auto py-2",
        maxWidthClasses[maxWidth],
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
