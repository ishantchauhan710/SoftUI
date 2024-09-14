"use client";
import { useState } from "react";
import FeatureContainer from "./FeatureContainer";
import TextField from "@/components/TextField";
import { BiLock, BiUser } from "react-icons/bi";
import TextArea from "@/components/TextArea";
import Checkbox from "@/components/CheckBox";
import DatePicker from "@/components/DatePicker";
import TimePicker from "@/components/TimePicker";
import Select from "@/components/Select";

export default function FormFieldsDemo() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");

  const [checked, setChecked] = useState(false);

  const [selectedValue1, setSelectedValue1] = useState("option1");
  const [selectedValue2, setSelectedValue2] = useState("option1");
  const [selectedValue3, setSelectedValue3] = useState("option1");

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <FeatureContainer title="Form Fields" id="Form">
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
        <div>
          <Select
            value={selectedValue1}
            onChange={(e) => setSelectedValue1(e.target.value)}
            options={options}
            fieldSize="small"
            className="w-64"
          />
        </div>
        <div>
          <Select
            value={selectedValue2}
            onChange={(e) => setSelectedValue2(e.target.value)}
            options={options}
            fieldSize="medium"
            className="w-64"
          />
        </div>
        <div>
          <Select
            value={selectedValue3}
            onChange={(e) => setSelectedValue3(e.target.value)}
            options={options}
            fieldSize="large"
            className="w-64"
          />
        </div>
      </div>
    </FeatureContainer>
  );
}
