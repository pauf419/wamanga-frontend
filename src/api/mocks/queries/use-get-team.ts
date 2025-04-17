import type { GetTeamMembersResult } from "@/api/types/results";

export const getTeamMembers = (): GetTeamMembersResult => {
  return {
    data: [
      {
        id: 2323,
        teamId: 39,
        role: "OWNER",
        username: "figaro",
        description: null,
        rank: 3,
        points: 4,
        avatar:
          "https://zenko.b-cdn.net/84c9a76d-23d3-4028-8ca5-6d36411b1399?optimizer=image&width=96&quality=80&height=auto",
      },
      {
        id: 23232,
        teamId: 39,
        role: "EDITOR",
        username: "Сало",
        description: null,
        rank: 3,
        points: 4,
        avatar:
          "https://zenko.b-cdn.net/7cd30d54-ba8b-4930-8b9c-d26a0fe651e2?optimizer=image&width=96&quality=80&height=auto",
      },
      {
        id: 23243,
        teamId: 39,
        role: "EDITOR",
        username: "figaro",
        description: null,
        rank: 3,
        points: 4,
        avatar:
          "https://zenko.b-cdn.net/f280cb94-907b-4595-a50a-510ab4b0cb69?optimizer=image&width=96&quality=80&height=auto",
      },
      {
        id: 223323,
        teamId: 39,
        role: "EDITOR",
        username: "Чайхана",
        description: null,
        rank: 3,
        points: 4,
        avatar:
          "https://zenko.b-cdn.net/5a588597-5ecd-4b03-93f5-cd42168dfd21?optimizer=image&width=96&quality=80&height=auto",
      },
      {
        id: 236423,
        teamId: 39,
        role: "EDITOR",
        username: "pechena_kartopelka",
        description: null,
        rank: 3,
        points: 4,
        avatar:
          "https://zenko.b-cdn.net/02ff225b-d79b-4bc6-97fa-87b25c4252db?optimizer=image&width=96&quality=80&height=auto",
      },
    ],
  };
};
