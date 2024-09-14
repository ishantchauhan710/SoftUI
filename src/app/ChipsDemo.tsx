import Chip from "@/components/Chip";
import FeatureContainer from "./FeatureContainer";

export default function ChipsDemo() {
  return (
    <FeatureContainer title="Chips">
      <div className="space-y-4">
        <div className="gap-4 font-medium flex flex-wrap text-center text-sm text-muted">
          <Chip>Default</Chip>
          <Chip elevation="inside">Inside</Chip>
          <Chip elevation="outside">Outside</Chip>
          <Chip elevation="mix">Mix</Chip>
        </div>
        <div className="gap-4 font-medium flex flex-wrap text-center text-sm text-muted">
          <Chip rounded={false}>Default</Chip>
          <Chip rounded={false} elevation="inside">
            Inside
          </Chip>
          <Chip rounded={false} elevation="outside">
            Outside
          </Chip>
          <Chip rounded={false} elevation="mix">
            Mix
          </Chip>
        </div>
      </div>
    </FeatureContainer>
  );
}
