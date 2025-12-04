import type { MealModel } from "@entities/meal";
import { MealFavoriteList } from "@widgets/meal-favorite-list";
import { MealFavoriteEmptyState } from "../ui/empty-state";

type ScreenComponent = typeof MealFavoriteEmptyState | typeof MealFavoriteList;

const SCREEN_MAP = new Map<(meals: MealModel[]) => boolean, ScreenComponent>([
  [(meals: MealModel[]) => meals.length === 0, MealFavoriteEmptyState],
  [(meals: MealModel[]) => meals.length > 0, MealFavoriteList],
]);

export const getComponent = (meals: MealModel[]): ScreenComponent => {
  let Component: ScreenComponent = MealFavoriteEmptyState;

  for (const [predicate, _Component] of SCREEN_MAP) {
    if (predicate(meals)) {
      Component = _Component;
    }
  }

  return Component;
};
