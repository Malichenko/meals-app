export type RouteParams = {
  Categories: undefined;
  MealOverview: { categoryId: string; title: string };
  MealDetails: { mealId: string; title: string };
};

export type RouteKey = keyof RouteParams;
