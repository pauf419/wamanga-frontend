import type { Chapter } from "./chapter";

export interface Volume {
  id: number;
  chapters: Chapter[];
  totalChapters: number;
  index: number;
}

export interface TitleVolumeConfig {
  volumes: Volume[];
  totalVolumes: number;
}
