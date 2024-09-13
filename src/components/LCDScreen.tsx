"use client";

import { lcdFont } from "@/lib/fonts";
import Card from "./Card";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function LCDScreen() {
  const [hours, setHours] = useState<string>("00");
  const [minutes, setMinutes] = useState<string>("00");
  const [seconds, setSeconds] = useState<string>("00");

  useEffect(() => {
    const timerId = setInterval(() => {
      const currentTime = new Date();

      setHours(addLeadingZero(currentTime.getHours()));
      setMinutes(addLeadingZero(currentTime.getMinutes()));
      setSeconds(addLeadingZero(currentTime.getSeconds()));
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const addLeadingZero = (num: number) =>
    num < 10 ? `0${num}` : num.toString();

  const [temperature, setTemperature] = useState(20);

  useEffect(() => {
    const temperatureId = setInterval(() => {
      setTemperature((prevTemperature) => {
        const newTemperature = prevTemperature + 1;
        if (newTemperature >= 25) {
          return 16;
        }
        return newTemperature;
      });
    }, 1000);

    return () => clearInterval(temperatureId);
  }, []);

  return (
    <div className="flex gap-4 items-center">
      <Card
        variant="lcd"
        className={clsx(
          "text-4xl p-3 rounded-md min-w-[160px] text-center",
          lcdFont.className
        )}
        elevation="inside"
      >
        {`${hours}:${minutes}:${seconds}`}
      </Card>
      <Card
        variant="lcd"
        className={clsx(
          "text-4xl p-3 rounded-md min-w-[120px] text-center",
          lcdFont.className
        )}
        elevation="mix"
      >
        {`${temperature}°C`}
      </Card>
    </div>
  );
}
