import type { GetComicCommentsResult } from "@/api/types/results";

export const getComicComments = (): GetComicCommentsResult => {
  return {
    data: [],
  };
};

/*export const getComicComments = (): GetComicCommentsResult => {
  return {
    data: [
      {
        id: 0,
        text: "balslalslalslalslasla",
        imageId: null,
        chapterId: null,
        chapterPageId: null,
        comicId: 1212,
        userId: 232323,
        isSpoiler: false,
        hasReplies: false,
        createdAt: 2323232,
        likes: [],
        user: {
          _id: "sdsd",
          banner: "dasasd",
          bookmarksWithStatus: [],
          commented: [],
          comments: [],
          email: "",
          password: "",
          teams: [],
          watched: [],
          xp: 100,
          id: 704,
          avatar:
            "https://zenko.b-cdn.net/dede5935-0a15-4817-975f-733d554f5f4f?optimizer=image&width=96&quality=80&height=auto",
          coverImg: "ea47a93a-6ac3-42ab-aeba-4a7f057a9a5b",
          online: false,
          role: "USER",
          username: "Одеська Іриска",
          description: "❤️❤️❤️",
          ageLimit: "18",
          rank: 15,
          points: 1568,
          gender: "FEMALE",
        },
      },
      {
        id: 1,
        text: "balslalslalslalslasla",
        imageId: null,
        chapterId: null,
        chapterPageId: null,
        comicId: 1212,
        userId: 232323,
        isSpoiler: false,
        hasReplies: false,
        createdAt: 2323232,
        likes: [],
        user: {
          _id: "sdsd",
          banner: "dasasd",
          bookmarksWithStatus: [],
          commented: [],
          comments: [],
          email: "",
          password: "",
          teams: [],
          watched: [],
          xp: 100,
          id: 704,
          avatar:
            "https://zenko.b-cdn.net/dede5935-0a15-4817-975f-733d554f5f4f?optimizer=image&width=96&quality=80&height=auto",
          coverImg: "ea47a93a-6ac3-42ab-aeba-4a7f057a9a5b",
          online: false,
          role: "USER",
          username: "Одеська Іриска",
          description: "❤️❤️❤️",
          ageLimit: "18",
          rank: 15,
          points: 1568,
          gender: "FEMALE",
        },
      },
    ],
  };
};*/
