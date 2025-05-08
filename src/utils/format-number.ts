export function formatNumber(num: number): string {
  const suffixes = ["", "K", "M", "B", "T"];
  let tier = 0;

  while (num >= 1000 && tier < suffixes.length - 1) {
    num /= 1000;
    tier++;
  }

  return num.toFixed(1).replace(/\.0$/, "") + suffixes[tier];
}
