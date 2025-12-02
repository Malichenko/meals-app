export type RouteParams = {
  Categories: undefined;
  MealOverview: { categoryId: string; title: string };
  MealDetail: { mealId: string; title: string };
};

export type RouteKey = keyof RouteParams;
