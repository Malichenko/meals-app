import type { Category } from "./types";

export const createCategory = (
  id: string,
  title: string,
  color: string
): Category => {
  return {
    id,
    title,
    color,
  };
};
