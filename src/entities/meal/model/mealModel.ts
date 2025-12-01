import type {Meal} from "./types";

export const createMeal = (
    id: string,
    categoryIds: string[],
    title: string,
    affordability: Meal["affordability"],
    complexity: Meal["complexity"],
    imageUrl: string,
    duration: number,
    ingredients: string[],
    steps: string[],
    isGlutenFree: boolean,
    isVegan: boolean,
    isVegetarian: boolean,
    isLactoseFree: boolean
): Meal => ({
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree,
});
