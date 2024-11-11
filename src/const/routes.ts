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
};
