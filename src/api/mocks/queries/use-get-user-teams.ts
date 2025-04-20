import type { GetUserTeamsResult } from "@/api/types/results";

export const getUserTeams = (): GetUserTeamsResult => {
  return {
    data: [
      {
        _id: "67b0337e3bb955c0606154bc",
        name: "Test Team",
        owner: "user123",
        avatar: "/teams/banners/82215562-ab05-46d1-9b3f-c7acc2f753db.png",
        banner: "/teams/banners/82215562-ab05-46d1-9b3f-c7acc2f753db.png",
        description: "sdsdsdsd",
        likes: "3434",
        boosty: "https://boosty.com/team",
        vk: "https://vk.com/team",
        patreon: "https://patreon.com/team",
        telegram: "https://t.me/team",
        discord: "https://discord.gg/team",
        id: 1123,
      },
    ],
  };
};
