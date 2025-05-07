export enum AdsFrameNames {
  HomeTop = "homepageHtmlTop",
  HomeBottom = "homepageHtmlBottom",
  MangaTop = "mangaPageHtmlTop",
  MangaBottom = "mangaPageHtmlBottom",
  Chapter = "chapterPageHtml",
  CatalogTop = "catalogPageHtmlTop",
  CatalogBottom = "catalogPageHtmlBottom",
  RulesTop = "rulesPageHtmlTop",
  RulesBottom = "rulesPageHtmlBottom",
  Footer = "footerHtml",
}

export interface Settings {
  title: string;

  longTitle: string;

  mangasHiddenByDefault: boolean;

  chaptersHiddenByDefault: boolean;

  homepageHtmlTop: string;

  homepageHtmlBottom: string;

  mangaPageHtmlTop: string;

  mangaPageHtmlBottom: string;

  chapterPageHtml: string;

  catalogPageHtmlTop: string;

  catalogPageHtmlBottom: string;

  rulesPageHtmlTop: string;

  rulesPageHtmlBottom: string;

  footerHtml: string;
}
