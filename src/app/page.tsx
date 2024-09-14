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
import NavBar from "./NavBar";

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
  const COMPONENTS = [
    {
      id: 1,
      title: "LED Lights",
      href: "#LED",
    },
    {
      id: 2,
      title: "Switch Buttons",
      href: "#Switch",
    },
    {
      id: 3,
      title: "LCD Screens",
      href: "#LCD",
    },
    {
      id: 4,
      title: "Sliders",
      href: "#Slider",
    },
    {
      id: 5,
      title: "Form Fields",
      href: "#Form",
    },
    {
      id: 6,
      title: "Date and Time Pickers",
      href: "#DateTime",
    },

    {
      id: 7,
      title: "Cards",
      href: "#Card",
    },
    {
      id: 8,
      title: "Chips",
      href: "#Chip",
    },
    {
      id: 9,
      title: "Icons",
      href: "#Icons",
    },
    {
      id: 10,
      title: "Typography",
      href: "#Typography",
    },
    {
      id: 11,
      title: "Buttons",
      href: "#Button",
    },
  ];

  return (
    <div className="space-y-12 pt-14">
      <NavBar />
      <div className="px-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="hidden md:block col-span-12 md:col-span-3 h-fit max-h-screen overflow-y-auto bg-background-variant shadow-sm rounded-md">
            {COMPONENTS.map((component, index) => {
              let dotColor = "bg-red-500";
              if (index % 3 === 0) {
                dotColor = "bg-red-500";
              } else if (index % 3 === 1) {
                dotColor = "bg-green-500";
              } else {
                dotColor = "bg-blue-500";
              }

              return (
                <a
                  href={component.href}
                  key={component.id}
                  className="flex gap-2 items-center font-medium px-6 py-2 cursor-pointer hover:bg-background hover:shadow-md"
                >
                  <div className={`w-2 h-2 rounded-full ${dotColor}`}></div>
                  <div>{component.title}</div>
                </a>
              );
            })}
          </div>
          <div className="col-span-12 md:col-span-9 px-10 space-y-10">
            <div className="space-y-3">
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
            <div>
              <Card elevation="mix" className="grid grid-cols-12">
                {FEATURES.map((feature) => (
                  <div
                    key={feature.id}
                    className="space-y-3 col-span-12 sm:col-span-6 md:col-span-4 text-center p-4"
                  >
                    <div className="flex justify-center">
                      <Icon
                        icon={feature.icon}
                        size={30}
                        className="text-muted/80"
                      />
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
            </div>
            <div className="min-h-screen space-y-4">
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
              <div className="py-10">
                Made by Ishant, contact{" "}
                <a
                  className="underline"
                  href="mailto:developerishant710@gmail.com"
                >
                  developerishant710@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
