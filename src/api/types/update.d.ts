
type UpdateButton = {
    link: string;
    text: string;
}

export interface Update {
    type: string;
    title: string;
    overview: string;
    image: string;
    button?: UpdateButton;
}