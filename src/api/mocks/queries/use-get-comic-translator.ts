import type { GetComicTranslatorResult } from "@/api/types/results";

export const getComicTranslator = (): GetComicTranslatorResult => {
  return {
    data: {
      id: 0,
      name: "ComicLinkTeam",
      description:
        "БлаБлаБлаБлаБлаБлаБлаБлаБлаБлаБлаБлаБлаБлаБлаБлаБлаБлаБлаБлаБлаБлаБлаБлаБлаБлаБлаБлаБлаБлаБлаБлаБлаБлаБлаБлаБлаБлаБла",
      avatar:
        "https://zenko.b-cdn.net/73d110bb-b559-4206-9fb0-3df427a5f567?optimizer=image&width=80&quality=80&height=auto",
      banner:
        "https://zenko.b-cdn.net/cover12.webp?optimizer=image&width=540&quality=80&height=auto",
      telegram: "https://t.me/",
      discord: "https://discord.com/",
      instagram: "https://www.instagram.com/",
      twitter: "",
      twitch: "",
      acknowledgments: 150,
      likesTotal: 212312,
      titlesTotal: 250,
      chaptersTotal: 2300,
      viewsTotal: 1000000,
    },
  };
};
