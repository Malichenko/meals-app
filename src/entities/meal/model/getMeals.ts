import type { MealModel } from "./types";
import { MEALS } from "./fixtures";

export const getMealsByCategoryId = (categoryId: string): MealModel[] => {
  return MEALS.filter((meal) => meal.categoryIds.includes(categoryId));
};

export const getMealById = (mealId: string): MealModel => {
  return MEALS.find((meal) => meal.id === mealId)!;
};
