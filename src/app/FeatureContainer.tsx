import Typography from "@/components/Typography";
import { PropsWithChildren } from "react";

interface FeatureContainerProps extends PropsWithChildren {
  title: string;
}

export default function FeatureContainer({
  title,
  children,
}: FeatureContainerProps) {
  return (
    <div>
      <Typography variant="h3">{title}</Typography>
      <div className="p-2"> {children}</div>
    </div>
  );
}
