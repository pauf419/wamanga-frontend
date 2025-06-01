/*export interface User {
  createdAt: number;
  id: number;
  avatar: string;
  coverImg: string;
  online: boolean;
  role: string;
  username: string;
  description: string;
  ageLimit: string;
  rank: number;
  points: number;
  gender: string;
}*/

import type { Bookmark } from "./bookmark";
import type { Comic } from "./comic";

export interface File {
  filename: string;
  format: string;
}

export interface User {
  id: number;
  coverImg: string;
  online: boolean;
  description: string;
  ageLimit: string;
  rank: number;
  points: number;
  gender: string;
  email: string;
  username: string;
  password: string;
  _id: string;
  avatar: string;
  banner: string;
  xp: number;
  bookmarksWithStatus: Bookmark[];
  watched: string[];
  comments: string[];
  commented: string[];
  teams: string[];
  role: string;
  assignedManga: Comic[];
  assignedAllManga: boolean;
  likedChapters: string[];
  description: string;
  restricted18: boolean;
  restricted16: boolean;
  teamsHidden: boolean;
  bookmarksHidden: boolean;
}
