import { convertOpacityToHex } from "@/utils";

export const colors = {
  textPriamry: "#9DA0F7",
  primary: "#5A5EE7",
  secondary: "#2D30A6",
  orange: "#FFAB00",
  red: "#F84B4B",
  green: "#22B07D",
  gray: "#1D1E20",
  hoverShadow: "0px 8px 16px 0px #5A5EE73D;",
  background: "#111213",
  sideBarBackground:
    "linear-gradient(180deg, rgba(17, 18, 19, 0.6) 0%, rgba(27, 26, 59, 0) 100%);",
  badgeBg: "#1D1E20" + convertOpacityToHex(80),
  badgeColor: "#787E89",
  text: "#FFFFFF",
  grayText: "#BDBDBD",
  iconColor: "#8F96A3",
  randomBtnBackground: "rgba(90, 94, 231, 0.08)",
  randomBtnBackgroundHover: "rgba(90, 94, 231, 0.32)",
  randomComicBackground: "rgba(47, 50, 55, 1)",
  nestedComicBackground: "rgb(29, 30, 32)"
};
