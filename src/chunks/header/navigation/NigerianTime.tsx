import { useEffect, useState } from "react";

export default function NigerianTime() {
  const [time, setTime] = useState("");

  const updateTime = () => {
    const time = new Date().toLocaleString("en-US", {
      hour: "2-digit",
      minute: "numeric",
      second: "numeric",
      hour12: true,
      timeZone: "Africa/Lagos",
    });
    setTime(time);
  };

  useEffect(() => {
    setInterval(updateTime, 1000);
  }, []);

  return <div className="min-w-[11ch]">{time}</div>;
}
