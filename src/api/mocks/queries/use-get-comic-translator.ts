import type { GetComicTranslatorResult } from "@/api/types/results";

export const getComicTranslator = (): GetComicTranslatorResult => {
  return {
    data: {
      id: 0,
      name: "WaManga",
      longName: "",
      description:
        "Описание излишне мабой, мы владеем этим сайтом, так что лучше бы тебе выключить адблокер и трахнуть премиальную подписочку с кредиточки твоей мамы...",
      avatar:
        "https://zenko.b-cdn.net/73d110bb-b559-4206-9fb0-3df427a5f567?optimizer=image&width=80&quality=80&height=auto",
      banner: "http://localhost:3000/mock-background.png",
      telegram: "https://t.me/",
      discord: "https://discord.com/",
      instagram: "https://www.instagram.com/",
      twitter: "",
      twitch: "",
      acknowledgments: 50,
      likesTotal: 212312,
      titlesTotal: 250,
      chaptersTotal: 2300,
      viewsTotal: 1000000,
    },
  };
};
