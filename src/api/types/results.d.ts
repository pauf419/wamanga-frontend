import type { Bookmark } from "./bookmark";
import type { Comic } from "./comic";
import type { ComicChapter } from "./comic-chapter";
import type { ComicComment } from "./comic-comment";
import type { Member } from "./member";
import type { Team } from "./team";
import type { TitleVolumeConfig } from "./volume";

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
  data: Comic;
}

export interface GetByCategoryResult {
  data: Comic[];
}

export interface GetLatestResult {
  data: Comic[];
}

export interface GetComicTranslatorResult {
  data: ComicTranslator;
}

export interface GetComicCommentsResult {
  data: ComicComment[];
}

export interface GetComicChaptersResult {
  data: ComicChapter[];
}

export interface GetSameTitlesResult {
  data: Comic[];
}

export interface GetTeamProjectsResult {
  data: Comic[];
}

export interface GetTeamMembersResult {
  data: Member[];
}

export interface GetBookmarkComicsResult {
  data: Comic[];
}

export interface GetUserBookmarksResult {
  data: Bookmark[];
}

export interface GetUserTeamsResult {
  data: Team[];
}

export interface GetTitleVolumeConfig {
  data: TitleVolumeConfig;
}
