import type { Comic } from "./comic";

export interface GetRecommendedResult {
  data: Comic[];
}

export interface GetRecentResult {
    data: Comic[];
}

export interface GetDayTopResult {
    data: Comic[];
}

export interface GetUpdatesResult {
    data: Update[];
}

export interface GetRandomComicResult {
    data: IComic;
}

export interface GetByCategoryResult {
    data: IComic[];
}

export interface GetLatestResult {
    data: IComic[];
}