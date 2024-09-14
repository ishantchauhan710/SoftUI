import FeatureContainer from "./FeatureContainer";
import Typography from "@/components/Typography";

export default function TypographyDemo() {
  return (
    <FeatureContainer title="Typography">
      <div className="space-y-4">
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="body1">Body 1</Typography>
        <Typography variant="body2">Body 2</Typography>
        <Typography variant="caption">Caption</Typography>
      </div>
    </FeatureContainer>
  );
}
