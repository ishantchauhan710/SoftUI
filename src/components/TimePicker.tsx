import React from "react";
import clsx from "clsx";

type TimePickerProps = {
  value: Date;
  onChange: (value: Date) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
};

const formatTime = (date: Date): string => {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

const parseTime = (timeString: string, currentDate: Date): Date => {
  const [hours, minutes] = timeString.split(":").map(Number);
  const newDate = new Date(currentDate);
  newDate.setHours(hours);
  newDate.setMinutes(minutes);
  return newDate;
};

const TimePicker: React.FC<TimePickerProps> = ({
  value,
  onChange,
  label,
  disabled = false,
  className,
}) => {
  return (
    <div className={clsx("inline-flex flex-col space-y-2", className)}>
      {label && (
        <label
          className={clsx(
            "text-sm font-medium",
            disabled ? "text-gray-500" : "text-gray-700"
          )}
        >
          {label}
        </label>
      )}
      <div
        className={clsx(
          "relative flex items-center px-4 py-2 rounded-lg",
          "shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.7)]",
          disabled
            ? "bg-gray-100 cursor-not-allowed border-gray-300"
            : "bg-background-variant"
        )}
      >
        <input
          type="time"
          value={formatTime(value)}
          onChange={(e) => onChange(parseTime(e.target.value, value))}
          disabled={disabled}
          className={clsx(
            "w-full bg-transparent outline-none text-gray-700",
            disabled ? "text-gray-500" : "text-gray-700",
            "appearance-none focus:outline-none"
          )}
        />
        <div className="absolute inset-0 rounded-lg bg-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default TimePicker;
