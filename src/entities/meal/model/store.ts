import { useShallow } from "zustand/react/shallow";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { MEALS } from "./fixtures";
import { MealModel } from "./types";

interface MealStore {
  meals: MealModel[];
  favoriteMeals: MealModel[];
  toggleFavorites: (ids: string) => void;
  isFavorite: (mealId: string) => boolean;
}

const useStore = create<MealStore>()(
  immer((set, get) => ({
    meals: MEALS,
    favoriteMeals: [],
    toggleFavorites: (mealId: string) => {
      set((state) => {
        const idx = state.favoriteMeals.findIndex((meal) => meal.id === mealId);
        if (idx !== -1) {
          state.favoriteMeals.splice(idx, 1);
        } else {
          state.favoriteMeals.push(
            state.meals.find((meal) => meal.id === mealId)!
          );
        }
      });
    },
    isFavorite: (mealId: string) =>
      get().favoriteMeals.some((meal) => meal.id === mealId),
  }))
);

export const useMealSelectors = {
  byCategory: (categoryId: string) =>
    useStore(
      useShallow((state) =>
        state.meals.filter((meal) => meal.categoryIds.includes(categoryId))
      )
    ),
  byId: (mealId: string) =>
    useStore(
      useShallow((state) => state.meals.find((meal) => meal.id === mealId))
    ),

  favorites: () => useStore((state) => state.favoriteMeals),

  toggleFavorite: () => useStore((state) => state.toggleFavorites),

  isFavorite: (mealId: string) =>
    useStore(useShallow((state) => state.isFavorite(mealId))),
};
