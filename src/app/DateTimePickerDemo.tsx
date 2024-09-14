"use client";
import { useState } from "react";
import FeatureContainer from "./FeatureContainer";
import DatePicker from "@/components/DatePicker";
import TimePicker from "@/components/TimePicker";

export default function DateTimePickerDemo() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  return (
    <FeatureContainer title="Date and Time Pickers">
      <div className="space-y-4">
        <div>
          <DatePicker value={date} onChange={(val) => setDate(val)} />
        </div>
        <div>
          <TimePicker value={time} onChange={(val) => setTime(val)} />
        </div>
      </div>
    </FeatureContainer>
  );
}
