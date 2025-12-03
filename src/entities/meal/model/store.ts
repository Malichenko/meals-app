import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { MEALS } from "./fixtures";
import type { MealModel } from "./types";

export interface MealStore {
  meals: MealModel[];
  favorites: Set<string>;
  toggleFavorite: (mealId: string) => void;
  getMealById: (mealId: string) => MealModel | undefined;
  getMealsByCategoryId: (categoryId: string) => MealModel[];
  getFavorites: () => MealModel[];
}

export const useMealStore = create<MealStore>()(
  immer((set, get) => ({
    meals: MEALS,
    favorites: new Set<string>(),
    toggleFavorite: (mealId) => {
      set((state) => {
        if (state.favorites.has(mealId)) {
          state.favorites.delete(mealId);
        } else {
          state.favorites.add(mealId);
        }
      });
    },
    getMealById: (mealId) => {
      return get().meals.find((meal) => meal.id === mealId);
    },
    getMealsByCategoryId: (categoryId) => {
      return get().meals.filter((meal) =>
        meal.categoryIds.includes(categoryId)
      );
    },
    getFavorites: () => {
      const state = get();
      return state.meals.filter((meal) => state.favorites.has(meal.id));
    },
  }))
);
