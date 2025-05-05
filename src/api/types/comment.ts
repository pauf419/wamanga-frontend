import type { Comic } from "./comic";
import type { User } from "./user";

export interface IComment {
  _id: string;
  author: User;
  text: string;
  user?: User;
  manga?: Comic;
  createdAt: string;
}
