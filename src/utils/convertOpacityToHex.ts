export const convertOpacityToHex = (opacity: number) => {
  const res = Math.round(opacity * 2.55).toString(16);
  return res;
};
