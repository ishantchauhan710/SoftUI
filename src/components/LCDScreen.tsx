import { lcdFont } from "@/lib/fonts";
import Card from "./Card";
import clsx from "clsx";
import { ReactNode } from "react";

type Elevation = "none" | "outside" | "inside" | "mix";

type LCDScreenProps = {
  children: ReactNode;
  className?: string;
  elevation?: Elevation;
  showGrid?: boolean;
};

export default function LCDScreen({
  children,
  className,
  elevation = "inside",
  showGrid = false,
}: LCDScreenProps) {
  return (
    <Card
      variant="lcd"
      className={clsx(
        "relative text-4xl p-3 rounded-md text-center",
        lcdFont.className,
        className
      )}
      elevation={elevation}
    >
      {showGrid && (
        <div
          className="absolute w-full h-full inset-0"
          style={{
            backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
        `,
            backgroundSize: "10px 10px",
            pointerEvents: "none",
          }}
        ></div>
      )}
      <div>{children}</div>
    </Card>
  );
}
