import { useEffect, useState } from "react";
import formatDate from "../utils/dateFormatter";

export default function useLiveTimeStamp(dateInput) {
  const date = new Date(dateInput);
  const [timeAgo, setTimeAgo] = useState(() => formatDate(date));
  useEffect(() => {
    let interval = 60000; // default interval : 1 minute
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / (1000 * 60));
    if (diffMins < 1) {
      interval = 5000; // interval : 5 seconds
    }
    const timer = setInterval(() => {
      setTimeAgo(formatDate(date));
    }, interval);

    return () => clearInterval(timer);
  }, [date]);
  return timeAgo;
}
