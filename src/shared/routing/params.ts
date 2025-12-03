import { NavigatorScreenParams } from "@react-navigation/native";

export type DrawerParams = {
  Categories: undefined;
  FavoriteMeals: undefined;
};

export type RouteParams = {
  Drawer: NavigatorScreenParams<DrawerParams>;
  MealOverview: { categoryId: string; title: string };
  MealDetail: { mealId: string; title: string };
};

export type RouteKey = keyof RouteParams;
