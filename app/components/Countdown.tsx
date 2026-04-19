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
    <div className="flex items-center justify-center gap-6 md:gap-10">
      {[
        { value: timeLeft.days, label: "Days" },
        { value: timeLeft.hours, label: "Hours" },
        { value: timeLeft.minutes, label: "Minutes" },
        { value: timeLeft.seconds, label: "Seconds" },
      ].map(({ value, label }, i) => (
        <div key={label} className="flex items-center gap-6 md:gap-10">
          <div className="text-center">
            <div
              className="font-serif text-5xl md:text-7xl font-light"
              style={{ color: "var(--gold-light)", lineHeight: 1 }}
            >
              {pad(value)}
            </div>
            <div
              className="text-xs tracking-widest uppercase mt-2"
              style={{ color: "var(--text-cream)", opacity: 0.6, fontFamily: "var(--font-lato)" }}
            >
              {label}
            </div>
          </div>
          {i < 3 && (
            <span className="font-serif text-4xl md:text-6xl font-light mb-4" style={{ color: "var(--gold)", opacity: 0.5 }}>
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
