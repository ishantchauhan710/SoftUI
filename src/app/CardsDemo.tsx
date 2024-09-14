"use client";
import FeatureContainer from "./FeatureContainer";
import Card from "@/components/Card";

export default function CardsDemo() {
  return (
    <FeatureContainer title="Cards">
      <div className="gap-4 text-sm font-medium flex flex-wrap text-center">
        <div>
          <Card
            className="w-28 h-28 flex items-center justify-center"
            variant="default"
            elevation="none"
          >
            Default
          </Card>
        </div>
        <div>
          <Card
            className="w-28 h-28 flex items-center justify-center"
            variant="default"
            elevation="inside"
          >
            Default (Inside)
          </Card>
        </div>
        <div>
          <Card
            className="w-28 h-28 flex items-center justify-center"
            variant="default"
            elevation="outside"
          >
            Default (Outside)
          </Card>
        </div>
        <div>
          <Card
            className="w-28 h-28 flex items-center justify-center"
            variant="default"
            elevation="mix"
          >
            Default (Mix)
          </Card>
        </div>
        <div>
          <Card
            className="w-28 h-28 flex items-center justify-center"
            variant="air"
            elevation="none"
          >
            Air
          </Card>
        </div>
        <div>
          <Card
            className="w-28 h-28 flex items-center justify-center"
            variant="default"
            elevation="inside"
          >
            Air (Inside)
          </Card>
        </div>
        <div>
          <Card
            className="w-28 h-28 flex items-center justify-center"
            variant="air"
            elevation="outside"
          >
            Air (Outside)
          </Card>
        </div>
        <div>
          <Card
            className="w-28 h-28 flex items-center justify-center"
            variant="air"
            elevation="mix"
          >
            Air (Mix)
          </Card>
        </div>

        <div>
          <Card
            className="w-28 h-28 flex items-center justify-center"
            variant="lcd"
            elevation="none"
          >
            LCD
          </Card>
        </div>
        <div>
          <Card
            className="w-28 h-28 flex items-center justify-center"
            variant="lcd"
            elevation="inside"
          >
            LCD (Inside)
          </Card>
        </div>
        <div>
          <Card
            className="w-28 h-28 flex items-center justify-center"
            variant="lcd"
            elevation="outside"
          >
            LCD (Outside)
          </Card>
        </div>
        <div>
          <Card
            className="w-28 h-28 flex items-center justify-center"
            variant="lcd"
            elevation="mix"
          >
            LCD (Mix)
          </Card>
        </div>
      </div>
    </FeatureContainer>
  );
}
