import Icon from "@/components/Icon";
import FeatureContainer from "./FeatureContainer";
import { BiBell, BiChat, BiUser } from "react-icons/bi";

export default function IconsDemo() {
  return (
    <FeatureContainer title="Icons">
      <div className="space-y-4">
        <div className="gap-4 font-medium flex flex-wrap text-muted">
          <Icon icon={<BiBell />} size={70} />
          <Icon icon={<BiUser />} size={70} />
          <Icon icon={<BiChat />} size={70} />
        </div>
        <div className="gap-4 font-medium flex flex-wrap text-muted">
          <Icon icon={<BiBell />} size={50} />
          <Icon icon={<BiUser />} size={50} />
          <Icon icon={<BiChat />} size={50} />
        </div>
        <div className="gap-4 font-medium flex flex-wrap text-muted">
          <Icon icon={<BiBell />} size={30} />
          <Icon icon={<BiUser />} size={30} />
          <Icon icon={<BiChat />} size={30} />
        </div>
      </div>
    </FeatureContainer>
  );
}
