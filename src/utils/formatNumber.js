export function formatNumber(value) {
  if (value === null || value === undefined) return '0';

  const absValue = Math.abs(value);

  if (absValue >= 1.0e+9) {
    return (value / 1.0e+9).toFixed(1).replace(/\.0$/, '') + 'B';
  } else if (absValue >= 1.0e+6) {
    return (value / 1.0e+6).toFixed(1).replace(/\.0$/, '') + 'M';
  } else if (absValue >= 1.0e+3) {
    return (value / 1.0e+3).toFixed(1).replace(/\.0$/, '') + 'k';
  } else {
    return value.toString();
  }
}