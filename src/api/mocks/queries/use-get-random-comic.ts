import type { GetRandomComicResult } from "@/api/types/results";

export const getRandomComic = (): GetRandomComicResult => {
  return {
    data: {
      name: "Терпение, Моя Леди!",
      alternativeName: "terpenie-moya-ledi",
      imagePath: "/mock-poster.png",
      id: "12312",
      description:
        "Как говорил Конфуций: Я никогда ничего не говорил, я немой. Поэтому я считаю вас дебилами, если вы считаете меня умным за то что я говорил того чего я не говорил. Я немой!",
      rating: 0,
      bannerPath: "/mock-background.png",
      type: "Manga",
      author: "",
      originalAuthor: "",
      year: 2023,
      isFinished: false,
      pegi: "3+",
      status: "В процессе",
      transferStatus: "В процессе",
      views: 1551334,
      likes: 174858,
      hidden: false,
      chaptersAvailable: 102,
      chaptersTotal: 1002,
      tags: [],
      genres: [],
      bookmark: 0,
    },
  };
};
