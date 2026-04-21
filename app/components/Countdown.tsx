"use client";

import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2026-09-12T17:00:00");

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    function update() {
      const now = new Date();
      const diff = WEDDING_DATE.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    }
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-10 md:gap-16">
      {[
        { value: timeLeft.days, label: "Days" },
        { value: timeLeft.hours, label: "Hours" },
        { value: timeLeft.minutes, label: "Minutes" },
        { value: timeLeft.seconds, label: "Seconds" },
      ].map(({ value, label }, i) => (
        <div key={label} className="text-center">
          <div
            className="text-6xl md:text-5xl font-normal"
            style={{ color: "white", lineHeight: 1, fontFamily: "var(--font-playfair), serif" }}
          >
            {pad(value)}
          </div>
          <div
            className="text-[10px] uppercase"
            style={{ color: "white", opacity: 0.7, fontFamily: "sans-serif", letterSpacing: "0.3em", marginTop: "1rem" }}
          >
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
