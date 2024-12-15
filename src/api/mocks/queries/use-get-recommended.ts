import type { GetRecommendedResult } from "@/api/types/recommended";

export const getRecommended = (): GetRecommendedResult => {
  return {
    data: [
      {
        name: "Терпение, Моя Леди!",
        alternativeName: "terpenie-moya-ledi",
        imagePath: "/mock-poster.png",
        id: 0,
        description:
          "Как говорил Конфуций: Я никогда ничего не говорил, я немой. Поэтому я считаю вас дебилами, если вы считаете меня умным за то что я говорил того чего я не говорил. Я немой!",
        rating: 0,
        bannerPath: "mock-background.png",
        typeComics: "Manga",
        author: "",
        originalAuthor: "",
        year: 0,
        isFinished: false,
        pegi: "3+",
        status: "В процессе",
        transferStatus: "В процессе",
        views: 1551334,
        likes: 174858,
        hidden: false,
        tags: [],
        genres: [],
        bookmark: 0,
      },
      {
        name: "И тем не менее...",
        alternativeName: "i-tem-ne-menee",
        imagePath: "/mock-poster-2.webp",
        id: 0,
        description:
          "Комикс про жизнь на венере, включающий в себя захватывающую историю о русалочке без хвостика. И вот настал час расплаты...",
        rating: 0,
        bannerPath: "mock-background-2.png",
        typeComics: "Manga",
        author: "",
        originalAuthor: "",
        year: 0,
        isFinished: false,
        pegi: "3+",
        status: "В процессе",
        transferStatus: "В процессе",
        views: 1551334,
        likes: 174858,
        hidden: false,
        tags: [],
        genres: [],
        bookmark: 0,
      },
    ],
  };
};
