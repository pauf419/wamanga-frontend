import type { Comic } from "@/api/types/comic";

export const getComics = (): Comic => {
  return {
    name: "Терпение, Моя Леди!",
    alternativeName: "terpenie-moya-ledi",
    imagePath:
      "https://zenko.b-cdn.net/ffc30b72-d39c-42f7-96b1-16a26acb9824?optimizer=image&width=1920&quality=80",
    id: "42423",
    description:
      "Ванесса донька Сатани - суккуб, яка просто хоче грати у відеоігри і розслаблятися вдома, поки одного разу йому, Сатані, не набридає, що вона ледарює вдома, і він не виганяє її в людський світ...",
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
    tags: [
      {
        id: 0,
        name: "ГГ мужчина",
        isVerified: true,
      },
      {
        id: 1,
        name: "ГГ женщина",
        isVerified: true,
      },
      {
        id: 2,
        name: "Сказка",
        isVerified: true,
      },
      {
        id: 3,
        name: "Приключения",
        isVerified: true,
      },
      {
        id: 4,
        name: "Артефакты",
        isVerified: true,
      },
      {
        id: 5,
        name: "Выживание",
        isVerified: true,
      },
      {
        id: 6,
        name: "Система",
        isVerified: true,
      },
    ],
    genres: [
      {
        id: 0,
        name: "История",
      },
      {
        id: 1,
        name: "Экшн",
      },
      {
        id: 2,
        name: "Сейнен",
      },
      {
        id: 3,
        name: "Фантастика",
      },
      {
        id: 4,
        name: "Мистика",
      },
    ],
    bookmark: 0,
  };
};
