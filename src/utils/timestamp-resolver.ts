function pluralize(number: number, one: string, few: string, many: string) {
  const mod10 = number % 10;
  const mod100 = number % 100;

  if (mod100 >= 11 && mod100 <= 14) return many;
  if (mod10 === 1) return one;
  if (mod10 >= 2 && mod10 <= 4) return few;
  return many;
}

export function timeAgo(timestamp: number) {
  const now = Date.now();
  const diff = now - timestamp;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0)
    return `${years} ${pluralize(years, "год", "года", "лет")} назад`;
  if (months > 0)
    return `${months} ${pluralize(months, "месяц", "месяца", "месяцев")} назад`;
  if (days > 0)
    return `${days} ${pluralize(days, "день", "дня", "дней")} назад`;
  if (hours > 0)
    return `${hours} ${pluralize(hours, "час", "часа", "часов")} назад`;
  if (minutes > 0)
    return `${minutes} ${pluralize(minutes, "минута", "минуты", "минут")} назад`;
  return `${seconds} ${pluralize(seconds, "секунда", "секунды", "секунд")} назад`;
}
