export function formatDate(isoDate: string): string {
  // Adding a time makes the browser read it as local time. Without it,
  // "2026-10-02" is treated as UTC and can show up as the previous day in some time zones.
  const date = new Date(`${isoDate}T00:00:00`);

  if (Number.isNaN(date.getTime())) return isoDate; // bad data: show it as-is, don't crash

  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}