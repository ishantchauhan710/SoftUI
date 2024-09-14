"use client";
import { useState } from "react";
import FeatureContainer from "./FeatureContainer";
import TextField from "@/components/TextField";
import { BiLock, BiUser } from "react-icons/bi";
import TextArea from "@/components/TextArea";
import Checkbox from "@/components/CheckBox";

export default function FormFieldsDemo() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");

  const [checked, setChecked] = useState(false);

  return (
    <FeatureContainer title="Form Fields">
      <div className="space-y-4">
        <TextField
          startIcon={<BiUser />}
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
          placeholder="Username"
        />
        <TextField
          startIcon={<BiLock />}
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <TextArea
          value={value3}
          onChange={(e) => setValue3(e.target.value)}
          placeholder="Remarks"
          rows={6}
        />
        <Checkbox
          label="I agree with terms and conditions"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      </div>
    </FeatureContainer>
  );
}
