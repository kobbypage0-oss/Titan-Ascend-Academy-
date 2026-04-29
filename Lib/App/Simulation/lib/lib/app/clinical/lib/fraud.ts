export function checkFraud(hours: number) {
  if (hours > 12) {
    return {
      flagged: true,
      reason: "Too many hours logged in one entry"
    };
  }

  return {
    flagged: false,
    reason: ""
  };
}
