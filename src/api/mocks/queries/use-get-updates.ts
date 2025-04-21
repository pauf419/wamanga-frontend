import type { GetUpdatesResult } from "@/api/types/results";

export const getUpdates = (): GetUpdatesResult => {
  return {
    data: [
      {
        type: "news",
        title: "Релиз BETA-версии",
        overview: "Мы открылись. Пока в BETA, но уже с душой",
        image: "/mock-background.png",
      },
      {
        type: "team",
        title: "Не герои, но почти",
        overview:
          "Наша суперсила — любовь к блю локу и бессонные ночи за переводами. Присоединяйся!",
        image: "/mock-background.png",
        button: {
          link: "/",
          text: "Подписаться",
        },
      },
    ],
  };
};
