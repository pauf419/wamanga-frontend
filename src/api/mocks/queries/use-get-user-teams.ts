import type { GetUserTeamsResult } from "@/api/types/results";

export const getUserTeams = (): GetUserTeamsResult => {
  return {
    data: [
      {
        avatar:
          "https://zenko.b-cdn.net/84c9a76d-23d3-4028-8ca5-6d36411b1399?optimizer=image&width=96&quality=80&height=auto",
        description: "121212",
        id: 11212,
        name: "Hello",
      },
      {
        avatar:
          "https://zenko.b-cdn.net/84c9a76d-23d3-4028-8ca5-6d36411b1399?optimizer=image&width=96&quality=80&height=auto",
        description: "121212",
        id: 12312,
        name: "Hello1",
      },
      {
        avatar:
          "https://zenko.b-cdn.net/84c9a76d-23d3-4028-8ca5-6d36411b1399?optimizer=image&width=96&quality=80&height=auto",
        description: "121212",
        id: 12812,
        name: "Hello2",
      },
      {
        avatar:
          "https://zenko.b-cdn.net/84c9a76d-23d3-4028-8ca5-6d36411b1399?optimizer=image&width=96&quality=80&height=auto",
        description: "121212",
        id: 12412,
        name: "Hello3",
      },
    ],
  };
};
