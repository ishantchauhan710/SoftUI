import Icon from "@/components/Icon";
import FeatureContainer from "./FeatureContainer";
import { BiBell, BiChat, BiUser } from "react-icons/bi";

export default function IconsDemo() {
  return (
    <FeatureContainer title="Icons" id="Icon">
      <div className="space-y-4">
        <div className="gap-4 font-medium flex flex-wrap text-muted">
          <Icon icon={<BiBell />} size={50} />
          <Icon icon={<BiUser />} size={50} />
          <Icon icon={<BiChat />} size={50} />
        </div>
      </div>
    </FeatureContainer>
  );
}
