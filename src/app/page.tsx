import Container from "@/components/Container";
import Typography from "../components/Typography";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import {
  FaAtom,
  FaBolt,
  FaCheckDouble,
  FaCode,
  FaCogs,
  FaCube,
} from "react-icons/fa";
import LEDDemo from "./LEDDemo";
import SwitchDemo from "./SwitchDemo";
import LCDScreenDemo from "./LCDScreenDemo";
import SliderDemo from "./SliderDemo";
import FormFieldsDemo from "./FormFieldsDemo";
import DateTimePickerDemo from "./DateTimePickerDemo";
import CardsDemo from "./CardsDemo";
import ChipsDemo from "./ChipsDemo";
import IconsDemo from "./IconsDemo";
import TypographyDemo from "./TypographyDemo";
import ButtonDemo from "./ButtonDemo";

const FEATURES = [
  {
    id: 1,
    icon: <FaCode />,
    title: "Flexible",
    description: "Comprehensive neumorphic components for all needs.",
  },
  {
    id: 2,
    icon: <FaAtom />,
    title: "Customizable",
    description: "Adjust colors, shadows, and borders easily.",
  },
  {
    id: 3,
    icon: <FaBolt />,
    title: "Responsive",
    description: "Optimized for all screen sizes.",
  },
  {
    id: 4,
    icon: <FaCheckDouble />,
    title: "Utility-First",
    description: "Apply neumorphic styles efficiently with utilities.",
  },
  {
    id: 5,
    icon: <FaCogs />,
    title: "Optimized",
    description: "Fast and lightweight components for smooth performance.",
  },
  {
    id: 6,
    icon: <FaCube />,
    title: "Clean",
    description: "Toggle inner and outer shadows effortlessly.",
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <Container className="grid grid-cols-12 gap-4 items-center">
        <div className="col-span-12 sm:col-span-8 space-y-3">
          <Typography variant="h1">
            Soft UI: A Neumorphism and Glassmorphism based UI library.
          </Typography>
          <Typography variant="h3" noShadow={true}>
            v1.0
          </Typography>
          <Typography variant="h2" noShadow={true} className="mt-6">
            Simple.
          </Typography>
          <Typography variant="h2" noShadow={true}>
            Smooth.
          </Typography>
          <Typography variant="h2" noShadow={true}>
            Clean.
          </Typography>
        </div>
        <div className="col-span-12 sm:col-span-4"></div>
      </Container>
      <Container>
        <Card elevation="mix" className="grid grid-cols-12">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="space-y-3 col-span-12 sm:col-span-6 md:col-span-4 text-center p-4"
            >
              <div className="flex justify-center">
                <Icon icon={feature.icon} size={30} className="text-muted/80" />
              </div>
              <Typography noShadow={true} variant="h3">
                {feature.title}
              </Typography>
              <Typography noShadow={true} variant="body1">
                {feature.description}
              </Typography>
            </div>
          ))}
        </Card>
      </Container>
      <Container className="min-h-screen space-y-4">
        <Typography variant="h2">Components</Typography>
        <Typography variant="body1">
          Soft UI provides different components. These are as follows:
        </Typography>
        <LEDDemo />
        <SwitchDemo />
        <LCDScreenDemo />
        <SliderDemo />
        <FormFieldsDemo />
        <DateTimePickerDemo />
        <CardsDemo />
        <ChipsDemo />
        <IconsDemo />
        <TypographyDemo />
        <ButtonDemo />
        <div className="h-60"></div>
      </Container>
    </div>
  );
}
