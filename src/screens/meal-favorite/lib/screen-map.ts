import type { MealModel } from "@entities/meal";
import { MealFavoriteList } from "@widgets/meal-favorite-list";
import { MealFavoriteEmptyState } from "../ui/empty-state";

export type ScreenComponent = typeof MealFavoriteEmptyState | typeof MealFavoriteList;

const SCREEN_MAP: Record<number, ScreenComponent> = {
  0: MealFavoriteEmptyState,
  1: MealFavoriteList,
};

export const getComponent = (meals: MealModel[]): ScreenComponent => {
  return SCREEN_MAP[Number(meals.length > 0)];
};
