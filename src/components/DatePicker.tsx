import React from "react";
import clsx from "clsx";

type DatePickerProps = {
  value: Date;
  onChange: (value: Date) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
};

const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const parseDate = (dateString: string): Date => {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day);
};

const DatePicker: React.FC<DatePickerProps> = ({
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
          type="date"
          value={formatDate(value)}
          onChange={(e) => onChange(parseDate(e.target.value))}
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

export default DatePicker;
