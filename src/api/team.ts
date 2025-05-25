import { $apiWithoutAuth } from "./axiosInstance";
import type { Team } from "./types/team";

export async function simpleSearch(query: string): Promise<Team[]> {
  const res = await $apiWithoutAuth.get(`/teams/search?query=${query}`);

  return res.data;
}

export async function getTeamById(id: string): Promise<Team> {
  const res = await $apiWithoutAuth.get(`/teams/${id}`);
  return res.data;
}

export async function getTeamsLeaderboard(limit: number): Promise<Team[]> {
  const res = await $apiWithoutAuth.get("/teams/leaderboard");
  return res.data;
}
