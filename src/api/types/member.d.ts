type Role = "OWNER" | "EDITOR";

export interface Member {
  id: number;
  teamId: number;
  role: Role;
  username: string;
  description: string | null;
  rank: number;
  points: number;
  avatar: string;
}
