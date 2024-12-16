import { GetUpdatesResult } from "@/api/types/results";

export const getUpdates = (): GetUpdatesResult => {
    return {
        data: [
            {
            type: "news",
            title: "медузки!!",
            overview: "Морские животные рулят mother fucker~",
            image: "/bac2.jpg",
            },
            {
            type: "team",
            title: "Команда лохов",
            overview: "Мы команда настоящих лошар, и мы покажем вам кто такой лось~",
            image: "bac3.png",
            button: {
                link: "/",
                text: "Подписаться",
            },
            },
            {
            type: "team",
            title: "Команда Uvuvwevwe Onyetyenyevwe Osas",
            overview:
                "Мы команда Uvuvwevwe Onyetyenyevwe Osas, и мы покажем вам кто такой Африка~",
            image: "bac1.jpg",
            },
            {
            type: "team",
            title: "Команда Uvuvwevwe Onyetyenyevwe Osas",
            overview:
                "Мы команда Uvuvwevwe Onyetyenyevwe Osas, и мы покажем вам кто такой Африка~",
            image: "bac1.jpg",
            },
            {
            type: "team",
            title: "Команда Uvuvwevwe Onyetyenyevwe Osas",
            overview:
                "Мы команда Uvuvwevwe Onyetyenyevwe Osas, и мы покажем вам кто такой Африка~",
            image: "bac1.jpg",
            },
            {
            type: "team",
            title: "Команда Uvuvwevwe Onyetyenyevwe Osas",
            overview:
                "Мы команда Uvuvwevwe Onyetyenyevwe Osas, и мы покажем вам кто такой Африка~",
            image: "bac1.jpg",
            }
        ]
    }
}