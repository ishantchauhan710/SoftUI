"use client";
import Button from "@/components/Button";
import Drawer from "@/components/Drawer";
import Typography from "@/components/Typography";
import { SoftUIData } from "@/other/data";
import { PropsWithChildren, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface FeatureContainerProps extends PropsWithChildren {
  title: string;
  id: string;
}

export default function FeatureContainer({
  title,
  children,
  id,
}: FeatureContainerProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const codeString =
    SoftUIData.find((item) => item.identifier === id)?.code || "";

  const usageString =
    SoftUIData.find((item) => item.identifier === id)?.usage || "";

  return (
    <div id={id} className="scroll-m-[5rem]">
      <Typography variant="h3">{title}</Typography>
      <div className="p-2"> {children}</div>
      <div className="flex justify-end">
        <Button onClick={toggleDrawer} label="View Code </>" size="small" />
      </div>
      <Drawer title={title} isOpen={isDrawerOpen} onClose={toggleDrawer}>
        <div className="mt-4 space-y-4 pt-4">
          <Typography variant="h3">Code</Typography>
          <SyntaxHighlighter language="typescript" style={docco}>
            {codeString}
          </SyntaxHighlighter>
          <Typography variant="h3">Usage</Typography>
          <SyntaxHighlighter language="typescript" style={docco}>
            {usageString}
          </SyntaxHighlighter>
        </div>
      </Drawer>
    </div>
  );
}
