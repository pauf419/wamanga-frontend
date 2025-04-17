import type { GetTitleVolumeConfig } from "@/api/types/results";

export const getTitleVolumeConfig = (): GetTitleVolumeConfig => {
  return {
    data: {
      volumes: [
        {
          chapters: [
            {
              index: 1,
              name: "1",
              id: 1001,
              refer: 0,
              totalPages: 3,
              description: "Ебейшее описание главы",
              pages: [
                {
                  id: 0,
                  index: 1,
                  name: "xd",
                  refer: 1,
                  type: "image",
                  content:
                    "https://zenko.b-cdn.net/46e6ec77-46ef-4a6b-a683-b8db4b66185b?optimizer=image&width=1200&quality=90&height=auto",
                },
                {
                  id: 1,
                  index: 2,
                  name: "xd",
                  refer: 1,
                  type: "image",
                  content:
                    "https://zenko.b-cdn.net/45d31224-49f2-48f0-8aca-c3c32ce896fb?optimizer=image&width=1200&quality=90&height=auto",
                },
                {
                  id: 2,
                  index: 3,
                  name: "xd",
                  refer: 1,
                  type: "image",
                  content:
                    "https://zenko.b-cdn.net/578163e6-eb21-47b2-99a5-f7812cf28024?optimizer=image&width=1200&quality=90&height=auto",
                },
              ],
            },
            {
              index: 2,
              name: "3",
              id: 1002,
              refer: 0,
              totalPages: 3,
              description: "Ебанутейшее описание главы",
              pages: [
                {
                  id: 0,
                  index: 1,
                  name: "xd",
                  refer: 1,
                  type: "image",
                  content:
                    "https://zenko.b-cdn.net/d3fca515-8c82-412b-9470-d7fead28f5e9?optimizer=image&width=1200&quality=90&height=auto",
                },
                {
                  id: 1,
                  index: 2,
                  name: "xd",
                  refer: 1,
                  type: "image",
                  content:
                    "https://zenko.b-cdn.net/20d599c5-c302-42f9-8a9a-b35f7361c54a?optimizer=image&width=1200&quality=90&height=auto",
                },
                {
                  id: 2,
                  index: 3,
                  name: "xd",
                  refer: 1,
                  type: "image",
                  content:
                    "https://zenko.b-cdn.net/20d599c5-c302-42f9-8a9a-b35f7361c54a?optimizer=image&width=1200&quality=90&height=auto",
                },
              ],
            },
          ],
          id: 1000,
          index: 1,
          totalChapters: 2,
        },
      ],
      totalVolumes: 1,
    },
  };
};
