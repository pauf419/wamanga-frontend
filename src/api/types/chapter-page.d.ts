/*export interface ChapterPage {
  id: number;
  refer: number;
  index: number;
  type: "text" | "image";
  name: string;
  content: string;
}*/

export interface ChapterPage {
  path: string;
  order: number;
  _id: string;
}
