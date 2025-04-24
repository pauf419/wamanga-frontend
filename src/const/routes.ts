export interface Route {
  path: string;
  title: string;
}

export const routes = {
  home: {
    path: "/",
    title: "Главная",
  },
  catalog: {
    path: "/catalog",
    title: "Каталог",
  },
  random: {
    path: "/random",
    title: "Рандом",
  },
  admin: {
    path: "/admin",
    title: "Рут админки",
  },
  adminSettings: {
    path: "/admin/settings",
    title: "Настройки",
  },
  adminComics: {
    path: "/admin/title",
    title: "Комиксы",
  },
  adminMain: {
    path: "/",
    title: "Главная",
  },
  adminAddComics: {
    path: "/admin/title/new",
    title: "Создать",
  },
  adminCatalog: {
    path: "/catalog",
    title: "Каталог",
  },
  adminUsers: {
    path: "/admin/users",
    title: "Юзеры",
  },
  adminTeams: {
    path: "/admin/teams",
    title: "Команды",
  },
};
