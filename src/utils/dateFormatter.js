export default function formatDate(inputDate) {
  const now = new Date();
  const date = new Date(inputDate);

  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  const isSameDay =
    now.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" }) ===
    date.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" });

  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  };
  const formattedTime = date.toLocaleTimeString("en-IN", timeOptions);

  if (isSameDay) {
    if (diffMins < 1) return "Just now";
    if (diffMins < 60)
      return `${diffMins} minute${diffMins > 1 ? "s" : ""} ago`;
    if (diffHours < 6)
      return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
    return `Today | ${formattedTime}`;
  }

  if (diffDays === 1) return `Yesterday | ${formattedTime}`;
  if (diffDays <= 4) return `${diffDays} days ago | ${formattedTime}`;

  const dateOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  };
  const formattedDate = date.toLocaleDateString("en-IN", dateOptions);
  return `${formattedDate} | ${formattedTime}`;
}
