export const getKey = (value: string | number, index: number): string => {
  return `${value}::${index}`;
};
