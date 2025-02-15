export interface ComicTranslator {
  id: number;
  name: string;
  longName: string;
  description: string;
  avatar: string;
  banner: string;
  telegram: string | null;
  discord: string | null;
  instagram: string | null;
  twitter: string | null;
  twitch: string | null;
  acknowledgments: number;
  likesTotal: number;
  titlesTotal: number;
  chaptersTotal: number;
  viewsTotal: number;
}
