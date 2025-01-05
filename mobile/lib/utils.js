export function formatDate(dateString) {
  const date = new Date(dateString);
  // 2025-08-17T14:35:37.592+00:00 => August 17, 2025
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
