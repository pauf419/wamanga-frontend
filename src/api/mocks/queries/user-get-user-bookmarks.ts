import type { GetUserBookmarksResult } from "@/api/types/results";

export const getUserBookmarks = (): GetUserBookmarksResult => {
  return {
    data: [
      {
        default: true,
        id: "dadasd",
        name: "Читаю",
      },
      {
        default: true,
        id: "dadasds",
        name: "Прочитано",
      },
      {
        default: true,
        id: "dadasd1",
        name: "Запланировано",
      },
      {
        default: true,
        id: "dadasd2",
        name: "Кастом",
      },
    ],
  };
};
